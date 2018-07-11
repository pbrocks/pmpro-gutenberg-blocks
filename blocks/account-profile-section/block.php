<?php
/**
 * Sets up account-page block, does not format frontend
 *
 * @package blocks/account-page
 **/

namespace PMPro\blocks\account_profile_section;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

// Only load if Gutenberg is available.
if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

add_action( 'init', __NAMESPACE__ . '\register_dynamic_block' );
/**
 * Register the dynamic block.
 *
 * @since 2.1.0
 *
 * @return void
 */
function register_dynamic_block() {
	// Hook server side rendering into render callback.
	register_block_type(
		'pmpro/account-profile-section', [
			'render_callback' => __NAMESPACE__ . '\render_dynamic_block',
		]
	);
}

/**
 * Server rendering for /blocks/examples/12-dynamic
 *
 * @return string
 **/
function render_dynamic_block() {
	return pmpro_shortcode_account(
		[
			'sections' => 'profile',
		]
	);
}
