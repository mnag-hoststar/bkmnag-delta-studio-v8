// ----------------------------------------
// Delta Studio: JS > Navigation
// ----------------------------------------

// Toggles class open to display/hide the whole navigation.

$('.extendednavigation__navigation-toggle').click(function() {
	$('.template__navigation').toggleClass('open');
});

// Toggles class open to display/hide folders.

$('.navigation-item.folder').each(function() {
	$(this).click(function() {
		$(this).parent('.navigation-item.folder').toggleClass('open');
	});
});