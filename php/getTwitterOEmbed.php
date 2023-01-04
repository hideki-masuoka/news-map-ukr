<?php

if (! ($argv[1] ?? false)) {
    echo "target not found";
    exit;
}

$targetDB = 'firestore';

$outputfilename = dirname(__FILE__, 2) . '/src/lib/json/daily/oembed';
//$targetDate = "20220310";
$targetDate = $argv[1];
$tweetdata = [];

if('json' === $targetDB) {
    $inputJsonFile = dirname(__FILE__, 2) . '/src/lib/json/tweet.json';
    $targetjson = file_get_contents($inputJsonFile);
    $tweetdata = json_decode($targetjson, true);
    //var_export($tweetdata);
} else {
    $url = "https://news-map-helper-ujqradh3xa-dt.a.run.app/gettweetidsbymonth/";
    $sendFields = [
        'dateString' => $targetDate
    ];
    $curlOpt = [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HTTPHEADER=> ['Content-Type: application/x-www-form-urlencoded']
    ];
    $curlOpt[CURLOPT_URL] = $url;
    $curlOpt[CURLOPT_POSTFIELDS] = http_build_query($sendFields);

    $curl = curl_init();
    curl_setopt_array($curl, $curlOpt);
    $response = curl_exec($curl);
    curl_close($curl);
    $ret = json_decode($response, true);

    $tweetdata = $ret['result'];

    //var_export($ret);
    //$err = curl_error($curl);
    //var_export($err);
    
}
//exit;

$embedparams = "https://publish.twitter.com/oembed?maxwidth=280&hide_thread=t&omit_script=t&align=center&dnt=true&url=https%3A%2F%2Ftwitter.com%2Fname%2Fstatus%2F";

$stream_context = stream_context_create(
    ['ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false
    ]]
);

$retdata = [];

foreach($tweetdata as $k => $item) {
  $date = $item["date"];
  if($targetDate && !($targetDate === $date)) {
                 continue;
}
  $tweetid = (string)$k;
  $data = file_get_contents($embedparams . $tweetid, false, $stream_context);
  $retdata[$date][$k] = json_decode($data, true);

  usleep(300000);
}

if (empty($retdata)) {
    echo 'data not found';
    exit;
}

foreach($retdata as $k => $item) {
  ksort($item);
  file_put_contents($outputfilename . $k . ".json", json_encode($item, JSON_PRETTY_PRINT));
}

exit;
