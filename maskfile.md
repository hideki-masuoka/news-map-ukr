# news-map-ukr

## make:json (ID)

```sh
echo -e "\n" >> tweet.js
echo '{ id: "'$ID'", area: "UA-", embed: ' >>tweet.js
curl "https://publish.twitter.com/oembed?maxwidth=280&hide_thread=t&omit_script=t&align=center&dnt=true&url=https%3A%2F%2Ftwitter.com%2Fname%2Fstatus%2F$ID" >>tweet.js
echo -e "\n" >>tweet.js
echo '},' >>tweet.js
echo -e "\n" >>tweet.js
```

## deploy

```sh
firebase deploy
```

## build

```sh
pnpm build
```

## start

```sh
pnpm dev
```

## format

```sh
pnpm format
```
