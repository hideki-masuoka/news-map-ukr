<?php
$outputfilename = 'oembed';
$inputJsonFile = '../src/lib/json/tweet.json';
$targetDate = "20220228";

$targetjson = file_get_contents($inputJsonFile);
$tweetdata = json_decode($targetjson, true);

$embedparams = "https://publish.twitter.com/oembed?maxwidth=280&hide_thread=t&omit_script=t&align=center&dnt=true&url=https%3A%2F%2Ftwitter.com%2Fname%2Fstatus%2F";

$retdata = [];

foreach($tweetdata as $k => $item) {
  $date = $item["date"];
  if($targetDate && !($targetDate === $date)) {
                 continue;
}
  $tweetid = (string)$k;
  $data = file_get_contents($embedparams . $tweetid);
  $retdata[$date][$k] = json_decode($data, true);
}

foreach($retdata as $k => $item) {
  ksort($item);
  file_put_contents($outputfilename . $k . ".json", json_encode($item));
}