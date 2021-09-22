<?php
/**
  * Plugin Name: Title In Sidebar
  * Description: Moves page/post title field to the settings sidebar
  * Version: 1.0.0
  * Author: Alex Marsh
  * Author URI: helloflynn.com
  *
  * Use "tis" prefix for "title in sidebar"
  */


// avoid direct access to this folder
if( ! defined( 'ABSPATH') ) {
    exit;
}

// Enqueue assets
add_action( 'enqueue_block_editor_assets', 'tis_enqueue_assets' );
function tis_enqueue_assets() {
    // main script
    wp_enqueue_script(
        'tis-gutenberg-scripts', // name
        plugins_url( 'build/index.js', __FILE__ ), // location
        array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-data' ) // dependencies
    );
    // styles
    wp_enqueue_style(
        'tis-gutenberg-styles', // name
        plugins_url( 'assets/styles/style.css', __FILE__ ), // location
    );
}

?>