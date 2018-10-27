<?php
/**
 * Plugin Name: Paid Memberships Pro - Gutenberg Blocks Add On
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

add_filter( 'block_categories', __NAMESPACE__ . '\place_blocks_in_panel', 10, 2 );
function place_blocks_in_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'pmpro',
				'title' => __( 'Paid Memberships Pro', 'paid-memberships-pro' ),
			),
		)
	);
}

require_once( 'blocks/blocks.php' );

/**
 * TODO: i18n
 */

/**
 * TODO: Autoloader
 */
