<?php
/**
  * Plugin Name: Title In Sidebar
  * Description: Moves page/post title field to the settings sidebar
  * Version: 1.1.0
  * Author: Alex Marsh
  * Author URI: https://github.com/alexmarsh
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
    // Enqueue main script for editor
    wp_enqueue_script(
        'tis-gutenberg-scripts', // name
        plugins_url( 'build/index.js', __FILE__ ), // location
        array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-data' ), // dependencies
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ) // version (cache busting)
    );

    // Enqueue editor styles
    wp_enqueue_style(
        'tis-editor-styles', // name
        plugins_url( 'assets/styles/style.css', __FILE__ ), // location
        array(), // dependencies
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/styles/style.css' ) // version (cache busting)
    );
}

?>