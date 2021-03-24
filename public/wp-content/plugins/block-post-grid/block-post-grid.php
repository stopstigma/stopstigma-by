<?php

/**
 * Plugin Name:     Block Post Grid
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     block-post-grid
 *
 * @package         create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_block_post_grid_block_init()
{
	$args = [
		'render_callback' => 'post_grid_block_dynamic_render_callback',
		'attributes' => [
			'numberOfPosts' => [
				'type' => 'number',
				'default' => 3,
			]
		],
	];

	register_block_type_from_metadata(__DIR__, $args);
}
add_action('init', 'create_block_block_post_grid_block_init');

function post_grid_block_dynamic_render_callback($block_attributes)
{
	// var_dump($block_attributes);

	$posts = get_posts(
		[
			'numberposts' => 3
		]
	);

	if (empty($posts[2])) {
		return 'No posts';
	}

	$data = [];
	$data['posts'] = $posts;

	ob_start();
	include 'template.php';
	// $html = '';
	// $html .= '<div>';
	// foreach ($posts as $post) {
		// $html .= sprintf('<p>%s</p>', $post->post_title);
	// }
	// $html .= '</div>';
	return ob_get_clean();
}
 
// function gutenberg_examples_dynamic() {
//     // automatically load dependencies and version
//     $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
//     wp_register_script(
//         'gutenberg-examples-dynamic',
//         plugins_url( 'build/block.js', __FILE__ ),
//         $asset_file['dependencies'],
//         $asset_file['version']
//     );
 
//     register_block_type( 'gutenberg-examples/example-dynamic', array(
//         'apiVersion' => 2,
//         'editor_script' => 'gutenberg-examples-dynamic',
//         'render_callback' => 'gutenberg_examples_dynamic_render_callback'
//     ) );
 
// }
// add_action( 'init', 'gutenberg_examples_dynamic' );