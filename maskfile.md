# news-map-ukr

## make:json (ID)

```sh
echo -e "\n"
echo '{ id: "'$ID'", area: "UA-", embed: '
curl "https://publish.twitter.com/oembed?maxwidth=280&hide_thread=t&omit_script=t&align=center&dnt=true&url=https%3A%2F%2Ftwitter.com%2Fname%2Fstatus%2F$ID"
echo -e "\n"
echo '},'
echo -e "\n"
```
