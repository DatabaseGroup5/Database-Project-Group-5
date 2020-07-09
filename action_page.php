<!DOCTYPE html>
<html>
<body>
<?php
	$search = $_GET['search'];
	$str = strtolower($search);
	if($str == 'malaysia'){
		header("Location: ./database/Countries/Malaysia.html");
	}
		/*http://localhost/action_page.php?search=Malaysia*/
?>
</body>
</html>

