# CheeseShop

## CheeseShopApi

NOTE - Use the Development build, as the react app currently can't access the Production build

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
