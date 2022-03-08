import alltweet from '$lib/json/tweet.json';
import details from '$lib/json/oembed.json';

export const getFromDate = (date)=> {
    let arr = [];
    Object.entries(alltweet).forEach(([k,obj])=>{
        if(date === obj.date) {
            arr.push({
                id: k,
                area: obj.area,
                embed: details[k] ?? {}
            });
        }
    });
    return arr;
} ;
