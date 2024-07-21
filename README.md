# CheeseShop

- A simple web app and API for displaying cheeses with prices and photos.
- This uses React and ASP.NET Core.

## CheeseShopApi

### Development

```
cd CheeseShopApi
dotnet run
```

go to https://localhost:4000/swagger

### Production (Work in Progress)

- NOTE - Use the Development build to test the full stack, as the React app currently can't access the Production build

```
cd CheeseShopApi
docker build -t cheeseshopapi .
docker run -d -p 4000:4000 --name cheeseshopapi-container cheeseshopapi
```

## CheeseShopWeb

### Development

```
cd CheeseShopWeb
npm install
npm run dev
```

go to http://localhost:3000

### Unit Tests

```
cd CheeseShopWeb
npm test
```

### Production

```

cd CheeseShopWeb
docker build -t cheeseshopweb .
docker run -d -p 3000:3000 --name cheeseshopweb-container cheeseshopweb

```

go to http://localhost:3000
