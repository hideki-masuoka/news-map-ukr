<script>
import EmbedTweet from "$lib/embedTweet.svelte";
import MapUKR from "$lib/MapUKR.svelte";

const tweetdata = [
    {
        "id": "1500370932262596610",
        "area": "UA-14"
    },
    {
        "id": "1500346373736071168",
        "area": "UA-65"
    },
    {
        "id": "1499833839388008450",
        "area": "UA-63"
    },
    {
        "id": "1500151262687363072",
        "area": "UA-32"
    },
    {
        "id": "1500152514938765313",
        "area": "UA-32"
    },
    {
        "id": "1500429165291474947",
        "area": "UA-32"
    },
    {
        "id": "1500432766092992518",
        "area": "UA-09"
    }
];
</script>

<main>
    <MapUKR />
  <EmbedTweet tweetdata="{tweetdata}" />
</main>
