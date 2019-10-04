$(document).ready(function () {
$('.menu-toggler').On('click',function(){
	$(this).togglerClass('open');
	$('.top-nav').toggleClass('open');
});

$('.top-nav .nav-link') .on('click',function(){
	$('.menu-toggler').removeClass('open');
	$('.top-nav').removeClass('open');
});

$('nav a[href*-"#"]).On('click',function(){
	$('html,body').animate(keyframes:{
		scrollTop:$($(this).attr('href')).offset-100
	},options:2000);
});

$('#up').On('click',function(){
	$('html,body').animate(keyframes:{
		scrollTop:0
	},options:2000);
	});
	
	AOS.init({
		easing:'ease',
		duration:1800,
		once:true
	});