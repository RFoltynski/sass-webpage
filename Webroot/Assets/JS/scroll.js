jQuery(function ($) {


	$('.link-1-home').click(function () { $.scrollTo($('header'), 500); });
	$('.link-2-Services').click(function () { $.scrollTo($('.Our-Services'), 500); });
	$('.link-3-Work').click(function () { $.scrollTo($('.Our-Portfolio'), 500); });
	$('.link-4-Testimonials').click(function () { $.scrollTo($('.Customers'), 500); });
	$('.link-5-Constact').click(function () { $.scrollTo($('.Contact'), 500); });

	$('.link-2-Services-dropdown').click(function () { $.scrollTo($('.Our-Services'), 500); });
	$('.link-3-Work-dropdown').click(function () { $.scrollTo($('.Our-Portfolio'), 500); });
	$('.link-4-Testimonials-dropdown').click(function () { $.scrollTo($('.Customers'), 500); });
	$('.link-5-Constact-dropdown').click(function () { $.scrollTo($('.Contact'), 500); });
	$('.scrollup').click(function () { $.scrollTo($('body'), 1000); });
	$.scrollTo(0);
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
	else $('.scrollup').fadeOut();
});

