<?php
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['email'])) {
?>

<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>MiMeals | Meal Explorer</title>
		<link rel="icon" type="image/x-icon" href="./images/mimealsfavicon.ico">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
								<header id="header">
								<p><b><a href="dashboard.php" class="logo">MiMeals</a></b> | <u>Explorer</u></p>
									<ul class="icons">
										<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
									</ul>
								</header>

							<!-- Content -->
							<section>
									<header class="main">
										<h1>Meal Explorer</h1>
									</header>



									<!-- Content -->
										<div>
											<p>Introducing our recipe explorer - the ultimate tool for culinary exploration. With just a simple scroll, you can discover a vast array of recipes from every corner of the world, each one guaranteed to excite your taste buds and inspire your creativity in the kitchen. From the bold flavors of Latin American cuisine to the aromatic spices of Indian dishes, our recipe explorer allows you to take a global journey from the comfort of your own home.</p>
											<p>Our platform is user-friendly, allowing you to easily filter and search for recipes based on dietary restrictions, cooking time, and ingredients. You can also save your favorite recipes for later, and share them with friends and family on social media. Plus, with new recipes added regularly, there's always something new and exciting to discover.</p>
											<p>Whether you're a seasoned foodie or a beginner cook, our recipe explorer is the perfect tool for expanding your culinary horizons and discovering new and exciting dishes. So why not take a journey around the world with us and let your taste buds be your guide? Start exploring today and get ready to experience a world of flavors like never before.</p>
										</div>
										<hr>

										<!-- recommended all results -->
										<div class="row" id = 'allResults'></div>


										<!-- search  -->
										<div class="input-field">
											<input type="text" placeholder="Search Query" id = 'search' required="required">
										</div>
										<div class="login-button" style="text-align:center">
											<input type="submit" id ='search-meal' class = 'button primary icon solid fa-check'>
										</div>
										<div class = 'row' id = 'searchResults'></div>

									<!-- Pagination -->
									<div class="container">
										<ul class="pagination">
											<!-- The page numbers are inserted here with Js -->
										</ul>
									</div>

								</section>

						</div>
					</div>

				<!-- Sidebar -->
					<div id="sidebar">
						<div class="inner">

							<!-- Search -->
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>

							<!-- Menu -->
								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="dashboard.php">Dashboard</a></li>
										<li><a href="meal-calendar.php">Calendar</a></li>
										<li><a href="meal-explorer.php">Explorer</a></li>
										<li><a href="meal-recipes.php">Recipes</a></li>
										<li><a href="includes/logout.php">Log out</a></li>
									</ul>
								</nav>

							<!-- Section -->
								<section>
									<header class="major">
										<h2>Ante interdum</h2>
									</header>
									<ul class="actions">
										<li><a href="#" class="button">More</a></li>
									</ul>
								</section>

							<!-- Section -->
								<section>
									<header class="major">
										<h2>Get in touch</h2>
									</header>
									<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
									<ul class="contact">
										<li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
										<li class="icon solid fa-phone">(000) 000-0000</li>
										<li class="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
									</ul>
								</section>

							<!-- Footer -->
								<footer id="footer">
									<p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
								</footer>

						</div>
					</div>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			<script type="module" src="assets/js/meal-explorer.js"></script>

	</body>
</html>

<?php
} else {
	header("Location: index.php");
}
?>