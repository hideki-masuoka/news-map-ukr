<script>
import EmbedTweet from "$lib/embedTweet.svelte";

const tweetdata = [
    {
        "id": "1499618165260759042",
        "area": "UA-14"
    },
    {
        "id": "1499531592770932741",
        "area": "UA-65"
    }
];
</script>

<main>
  <EmbedTweet tweetdata="{tweetdata}" />
</main>
