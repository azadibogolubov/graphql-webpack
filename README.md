# GraphQL microfrontend with Webpack example
<b>Credits:</b>
<br />
Starter code came from: https://github.com/paloitsingapore/webpack-module-federation
<br />
GraphQL schema came from: https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/

## To run server, host, and remote:
 
### Server
```
cd server
npm i
node index.js
```

### Remote #1
```
cd subA
npm i
npm run start
```

### Remote #2
```
cd subB
npm i
npm run start
```

### Host
```
cd host
npm i
npm run start
```
