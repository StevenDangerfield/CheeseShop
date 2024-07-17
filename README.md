# CheeseShop

## CheeseShopApi

NOTE - The react app currently can't access the Production build; use the Development build

### Development

```
cd CheeseShopApi
dotnet run
```

go to https://localhost:4000/swagger

### Production (Do Not Use)

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

### Production

```

cd CheeseShopWeb
docker build -t cheeseshopweb .
docker run -d -p 3000:3000 --name cheeseshopweb-container cheeseshopweb

```

go to http://localhost:3000

## Build in Docker (combined)

`docker build -t cheeseshop-app .`

## Run in Docker

`docker run -d -p 3000:3000 -p 4000:4000 --name cheeseshop cheeseshop-app`

- NOTE - I couldn't get the React app running in Docker; only the Api works