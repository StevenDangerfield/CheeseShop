# CheeseShop

## Run CheeseShopApi

```
cd CheeseShopApi
dotnet run
```
go to https://localhost:4000/swagger


## Run CheeseShopWeb

```
cd CheeseShopWeb
npm install
npm run dev
```
go to http://localhost:3000

## Build in Docker
`docker build -t cheeseshop-app .`

## Run in Docker
`docker run -d -p 3000:3000 -p 4000:4000 --name cheeseshop cheeseshop-app`

- NOTE - I couldn't get the React app running in Docker; only the Api works