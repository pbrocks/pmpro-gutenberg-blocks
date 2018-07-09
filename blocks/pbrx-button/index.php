<?php
/**
 * Extending native button block, does not format frontend
 *
 * @package blocks/levels-page
 **/

namespace PMPro\Blocks;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

// Only load if Gutenberg is available.
if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

add_action( 'init', __NAMESPACE__ . '\pmpro_pbrx__button_register_dynamic_block' );
/**
 * Register the dynamic block.
 *
 * @since 2.1.0
 *
 * @return void
 */
function pmpro_pbrx__button_register_dynamic_block() {
	// Hook server side rendering into render callback.
	register_block_type( 'pmpro/pbrx-button', [
		'render_callback' => __NAMESPACE__ . '\pmpro_pbrx_button_render_dynamic_block',
	] );
}

/**
 * Server rendering for /blocks/examples/12-dynamic
 *
 * @param array $attributes contains text, level, and css_class strings.
 * @return string
 **/
function pmpro_pbrx_button_render_dynamic_block( $attributes ) {

	$text      = 'Boy Nom';
	$level     = null;
	$css_class = 'wp-block-paid-memberships-pro-pbrx-button';

	if ( empty( $attributes['level'] ) ) {
		return '';
	}
	$level = $attributes['level'];

	if ( ! empty( $attributes['text'] ) ) {
		$text = $attributes['text'];
	}
	if ( ! empty( $attributes['cssClass'] ) ) {
		$css_class = $attributes['cssClass'];
	}

	return( pmpro_getCheckoutButton( $level, $text, $css_class ) );
}
