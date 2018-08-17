<?php
/**
 * Enqueues blocks in editor and dynamic blocks
 *
 * @package blocks
 */
namespace PMPro\Blocks;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

/**
 * TODO
 * NOTE: Maybe move this into includes/blocks.php or /blocks/blocks.php
 */

/**
 * Dynamic Block Requires
 */
require_once( 'checkout-button/block.php' );
require_once( 'block-button/block.php' );
require_once( 'block-button-too/block.php' );


/**
 * Enqueue block editor only JavaScript and CSS
 */
function pmpro_block_editor_scripts() {

	// Make paths variables so we don't write em twice.
	$block_path = 'js/editor.blocks.js';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'pmpro-blocks-js',
		plugins_url( $block_path, dirname( __FILE__ ) ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $block_path )
	);

	// Enqueue optional editor only styles.
	wp_enqueue_style(
		'pmpro-editor-css',
		plugins_url( $editor_style_path, dirname( __FILE__ ) ),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $editor_style_path )
	);

}

// Hook scripts function into block editor hook.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\pmpro_block_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function pmpro_block_scripts() {
	$block_path = 'js/frontend.blocks.js';
	$style_path = 'css/blocks.style.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'pmpro-blocks-frontend-js',
		plugins_url( $block_path, dirname( __FILE__ ) ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $block_path )
	);

	// Enqueue frontend and editor block styles.
	wp_enqueue_style(
		'pmpro-blocks-css',
		plugins_url( $style_path, dirname( __FILE__ ) ),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( dirname( __FILE__ ) ) . $style_path )
	);

}

// Hook scripts function into block editor hook.
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\pmpro_block_scripts' );
