<?php

if (! ($argv[1] ?? false)) {
    echo "target not found";
    exit;
}

$outputfilename = dirname(__FILE__, 2) . '/src/lib/json/daily/oembed';
$inputJsonFile = dirname(__FILE__, 2) . '/src/lib/json/tweet.json';
//$targetDate = "20220310";
$targetDate = $argv[1];

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

if (empty($retdata)) {
    echo 'data not found';
    exit;
}

foreach($retdata as $k => $item) {
  ksort($item);
  file_put_contents($outputfilename . $k . ".json", json_encode($item, JSON_PRETTY_PRINT));
}
