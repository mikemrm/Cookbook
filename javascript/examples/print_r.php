<!doctype html>
<html>
	<head>
		<title>Javascript version of PHP's print_r</title>
		<script type="text/javascript" src="../print_r.js"></script>
		<style>
			th {
				border-bottom: solid 2px rgb(100, 100, 100);
			}
			td {
				padding: 10px;
			}
			td:first-child {
				border-right: solid 2px rgb(100, 100, 100);
			}
		</style>
	</head>
	<body>
		<table>
			<thead>
				<th title="Actually this is JavaScript Output">
					PHP Output
				</th>
				<th title="Actually this is PHP Output">
					JavaScript Output
				</th>
			</thead>
			<tbody>
				<tr>
					<td>
						<pre><h3>Test 1</h3><div id="js_test_1"></div>
<h3>Test 2</h3><div id="js_test_2"></div>
<h3>Test 2 Anchor Fix</h3><div id="js_test_2.2"></div></pre>
						<script>
							var arr = [
							    "Value 0",
							    "This is value 1",
							    "This is value 2"
							];
							var obj = {
							    key: "this key value",
							    otherKey: "this other key value",
							    obj: {
							        fkey: "First Key",
							        lkey: "Last Key",
							        t: "<div class=\"test\">"
							    },
							    myarr:arr
							};
							document.getElementById('js_test_1').innerHTML = print_r(arr);
							document.getElementById('js_test_2').innerHTML = print_r(obj);
							document.getElementById('js_test_2.2').innerHTML = print_r(obj, true);

						</script>
					</td>
					<td>
						<?php
							$arr = array(
								"Value 0",
								"This is value 1",
								"This is value 2"
							);
							$obj = array(
								"key" => "this key value",
								"otherKey" => "this other key value",
								"obj" => array(
									"fkey" => "First Key",
									"lkey" => "Last Key",
									"t" => "<div class=\"test\">"
								),
								"myarr" => $arr
							);
							echo "<pre>";
							
							echo "<h3>Test 1</h3>";
							print_r($arr);
							
							echo "\n<h3>Test 2</h3>";
							print_r($obj);
							
							echo "\n<h3>Test 2 Anchor Fix</h3>";
							$print_r = print_r($obj, true);
							
							echo htmlentities($print_r);
							echo "</pre>\n";
						?>
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>
