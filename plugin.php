<?php
/**
  * Plugin Name: gutenberg-sidebar
  * Description: Sidebar for the block editor.
  * Version: 1.0.0
  * Author: Alex Marsh
  * Author URI: helloflynn.com
  */
if( ! defined( 'ABSPATH') ) {
    exit;
}

// Note that it’s a best practice to prefix function names (e.g. myprefix)
function myprefix_enqueue_assets() {
    wp_enqueue_script(
        'myprefix-gutenberg-sidebar',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
    );
}
add_action( 'enqueue_block_editor_assets', 'myprefix_enqueue_assets' );