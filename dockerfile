# Stage 1: Build React app (CheeseShopWeb)
FROM node:14 AS react-build
WORKDIR /app/CheeseShopWeb
COPY CheeseShopWeb/package*.json ./
RUN npm install
COPY CheeseShopWeb/ ./
RUN npm run build

# Stage 2: Build ASP.NET Core app (CheeseShopAPI)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS dotnet-build
WORKDIR /app
COPY CheeseShopApi/*.csproj ./
RUN dotnet restore
COPY CheeseShopApi/ ./
COPY --from=react-build /app/CheeseShopWeb/dist ./wwwroot
RUN dotnet publish -c Release -o out

# Stage 3: Final runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=dotnet-build /app/out .
EXPOSE 3000
EXPOSE 4000
ENV ASPNETCORE_URLS=http://+:4000
ENTRYPOINT ["dotnet", "CheeseShopApi.dll"]