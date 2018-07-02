<?php
/**
 * Enqueues blocks in editor and dynamic blocks
 *
 * @package blocks
 */

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

/* NOTE: Maybe move this into includes/blocks.php or /blocks/blocks.php */

/**
 * Dynamic Block Requires
 */
require_once 'checkout-button/block.php';
// require_once 'checkout-button-old/block.php';
require_once 'account-page/block.php';
require_once 'account-membership-section/block.php';
require_once 'account-profile-section/block.php';
require_once 'account-invoices-section/block.php';
require_once 'account-links-section/block.php';
require_once 'billing-page/block.php';
// require_once 'cancel-page/block.php';
// require_once 'checkout-page/block.php';
// require_once 'confirmation-page/block.php';
// require_once 'invoice-page/block.php';
require_once 'levels-page/block.php';
// require_once 'member/block.php';
require_once 'membership/block.php';
// require_once 'boilerplate/block.php';

/**
 * Enqueue block editor only JavaScript and CSS
 */
function pmpro_block_editor_scripts() {

	// Make paths variables so we don't write em twice.
	$block_path = '/../js/editor.blocks.js';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'pmpro-blocks-js',
		plugins_url( $block_path, __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path( __FILE__ ) . $block_path )
	);

	/*
	// Enqueue optional editor only styles.
	wp_enqueue_style(
		'pmpro-editor-css',
		plugins_url( $editor_style_path, __FILE__ ),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( __FILE__ ) . $editor_style_path )
	);
	*/
}

// Hook scripts function into block editor hook.
add_action( 'enqueue_block_editor_assets', 'pmpro_block_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function pmpro_block_scripts() {
	$block_path = '../js/frontend.blocks.js';
	$style_path = '../css/blocks.style.css';

	// Enqueue the bundled block JS file.
	wp_enqueue_script(
		'pmpro-blocks-frontend-js',
		plugins_url( $block_path, __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path( __FILE__ ) . $block_path )
	);

	// Enqueue frontend and editor block styles.
	wp_enqueue_style(
		'pmpro-blocks-css',
		plugins_url( $style_path, __FILE__ ),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( __FILE__ ) . $style_path )
	);

}

// Hook scripts function into block editor hook.
add_action( 'enqueue_block_assets', 'pmpro_block_scripts' );
