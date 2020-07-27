$(function() {
	$('.menu-toggle').on('click', function(){
		$('.mobile-menu').toggleClass('hide-menu');
		$('.burger').toggleClass('active');
	});

	

	$('.search-tag2').on('click', function(){
		$('.search-tag2').addClass('active-tag');
		$('.search-tag1').removeClass('active-tag');
		$('.tenants-form').removeClass('active-form');
		$('.owners-form').addClass('active-form');
	});

	$('.search-tag1').on('click', function(){
		$('.search-tag1').addClass('active-tag');
		$('.search-tag2').removeClass('active-tag');
		$('.owners-form').removeClass('active-form');
		$('.tenants-form').addClass('active-form');

	});

	$('.slider').slick({
		arrows:false,
		dots:true,
		// adaptiveHeight: true,
	});
});