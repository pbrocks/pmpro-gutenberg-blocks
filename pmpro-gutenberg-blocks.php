<?php
/**
 * Plugin Name: Paid Memberships Pro - Gutenberg Blocks
 * Plugin URI: https://www.paidmembershipspro.com
 * Description: Paid Memberships Pro Add On to deliver PMPro functionality in WP Blocks
 * Version: 1.1
 * Author: Stranger Studios
 * Author URI: https://www.strangerstudios.com
 * Text Domain: paid-memberships-pro
 * Domain Path: /languages
 */

namespace PMPro;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

// TODO:Uncomment once editing Gutenberg categories is implemented
/*
function pmpro_block_categories( $categories, $post ) {
	if ( $post->post_type !== 'post' ) {
		return $categories;
	}
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'pmpro',
				'title' => __( 'PMPro', 'paid-memberships-pro' ),
			),
		)
	);
}
add_filter( 'block_categories', 'pmpro_block_categories', 10, 2 );
*/

require_once( 'blocks/blocks.php' );

/**
 * TODO: i18n
 */

/**
 * TODO: Autoloader
 */
