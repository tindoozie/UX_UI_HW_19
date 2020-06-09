
console.log("your index.js file is loaded correctly!");

$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});