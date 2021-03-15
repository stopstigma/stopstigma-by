<?php
/**
 * The header for our theme.
 *
 * @package Kandinsky
 */

?><!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="theme-color" content="#000">

<?php wp_head(); ?>
</head>

<body id="top" <?php body_class(); ?>>

	<?php include_once get_template_directory() . '/assets/svg/svg.svg'; // all svgs. ?>
	<div id="site_content" class="site-content">
