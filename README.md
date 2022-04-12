# Find-my-iphone
Express js app checking icloud for iphone's location, saving to database, and displaying through webUI.

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