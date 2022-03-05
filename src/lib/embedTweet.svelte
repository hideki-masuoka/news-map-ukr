<script>
import {onMount,afterUpdate} from 'svelte';

export let area = {};

export let tweetdata = [];

const getAreaName = (id) => {
    return area[id].name ?? '';
};

onMount( ()=>{
    tweetdata.forEach((item)=>{
       twttr.widgets.createTweet(
            item.id,
            document.getElementById('twt' + item.id),
            {
                width: 300,
                align: 'center',
            }
       );
    });
});


afterUpdate(()=>{
    //twttr.widgets.load();
});

</script>



<section class="embedTweets">
{#each tweetdata as item}
    <div id="twt{item.id}"><strong>{getAreaName(item.area)}</strong></div>
{/each}
</section>
<style >
</style>
