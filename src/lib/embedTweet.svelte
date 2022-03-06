<script>
import {onMount,afterUpdate} from 'svelte';
import { areaData } from '$lib/area.js';

export let tweetdata = [];

let isLoaded = {};

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
        let target = document.getElementById('twt' + item.id);
        isLoaded[item.id] = true;
       await twttr.widgets.createTweet(
            item.id,
            target,
            {
                width: 300,
                align: 'center',
            }
       );
        isLoaded[item.id] = false;
    });

});


afterUpdate(()=>{
    //twttr.widgets.load();
});

</script>



<section class="embedTweets">
{#each tweetdata as item}
    <div id="twt{item.id}" class="tweetItem">
        <strong>{getAreaName(item.area)}</strong>
        {#if isLoaded[item.id]}
            <div class="tweetLoading">Loading...</div>
            {/if}
    </div>
{/each}
</section>
<style >
.embedTweets {
    @apply container m-auto flex flex-wrap gap-4;
}
.tweetItem {
    .tweetLoading {
        min-width: 300px;
        @apply text-center font-bold;
    }
}
</style>
