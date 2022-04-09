# Find-my-iphone
Link icloud, database, and webUI to log iphone's location information &amp; for viewing later.  

## PREPARE
```
git clone git@github.com:makobouzu/Find-my-iphone.git
cd find-my-iphone
npm install
```

```
touch .env
```
### .env file include
+ PORT
+ APPLE_ID
+ PASSWORD
+ SQLDB_IP
+ SQLDB_PORT
+ SQLDB_USER
+ SQLDB_PASSWORD

## RUN
```
cd find-my-iphone
npm run devStart
```

## REFERENCE
* [find-my-iphone](https://www.npmjs.com/package/find-my-iphone)
* [overpass](https://wiki.openstreetmap.org/wiki/Overpass_API)