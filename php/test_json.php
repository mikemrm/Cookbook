<?php
if(array_key_exists('CONTENT_TYPE', $_SERVER) && strtolower($_SERVER['CONTENT_TYPE']) == 'application/json'){
	$raw = file_get_contents('php://input');
	if(trim($raw) == '{"test":"true"}'){ # Just for security
		$json = json_decode($raw, true);
		echo htmlentities(print_r($json, true));
		exit();
	}
}


?>
<!doctype html>
<html>
	<head>
		<title>
			PHP JSON PARSER -  TEST PAGE
		</title>
	</head>
	<body>
		<script>
			function sendReq(){
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open("POST","test_json.php");
				xmlhttp.setRequestHeader("Content-type","application/json");
				xmlhttp.send(JSON.stringify({test:"true"}));
				xmlhttp.onreadystatechange = function(){
					if (xmlhttp.readyState == 4){
						if(xmlhttp.status == 200){
							document.querySelector('.results').innerHTML = xmlhttp.responseText;
						} else {
							document.querySelector('.results').innerHTML = 'Request Failed';
						}
					}
				}
			}
		</script>
		<a href="https://github.com/mikemrm/Cookbook/tree/master/php/test_json.php">View on GitHub</a><hr />
		Click <input type="button" value="here" text="here" onclick="sendReq()"> to send a JSON request as follows: {"test":"true"}
		<hr />
		Response:
		<pre class="results"></pre>
	</body>
</html>	
