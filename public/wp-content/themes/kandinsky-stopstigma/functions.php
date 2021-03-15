<?php 


add_action('wp_enqueue_scripts', function(){
	wp_enqueue_style('site-style', get_stylesheet_directory_uri() . '/css/main.min.css');
	// wp_enqueue_script('site-script', get_template_directory_uri() .'/js/scripts.min.js', array('jquery'), '20150825', true);
});
