<?php
// preview the README.md file

function printHeader($file) {
    echo <<<EOT
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>$file</title>
<link rel="stylesheet" href="md.css" type="text/css" media="all" />
</head>
<body>
<div id="page">
EOT;
}

function printFooter() {
    echo <<<EOT
</div>
</body>
</html>
EOT;
}

$readme = 'README.md';
$exec = 'markdown '.$readme;
$output = array();
$md = exec($exec, $output);

printHeader($readme);
echo implode("\n", $output);
printFooter();
