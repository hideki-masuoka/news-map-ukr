<script>
import {onMount,afterUpdate} from 'svelte';
import { areaData } from '$lib/area.js';

export let tweetdata = [];

const getAreaName = (id) => {
    if(
        ($areaData[id] ?? false)
        && ($areaData[id].name ?? false)
    ) {
        return $areaData[id].name;
    }
    return '';
};

onMount( async ()=>{
    tweetdata.forEach( async(item)=>{
       await twttr.widgets.createTweet(
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
