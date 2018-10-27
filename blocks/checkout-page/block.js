/**
 * Block: PMPro Membership Checkout
 *
 * Displays the Membership Checkout form.
 *
 */
 /**
  * Block dependencies
  */
 import './style.scss';
 import classnames from 'classnames';
 import Inspector from './inspector';
 /**
  * Internal block libraries
  */
 const { __ } = wp.i18n;
 const {
    registerBlockType,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
} = wp.blocks;
const {
    PanelBody,
    TextControl,
} = wp.components;

const {
    InspectorControls,
} = wp.editor;

 /**
  * Register block
  */
 export default registerBlockType(
     'pmpro/checkout-page',
     {
         title: __( 'Membership Checkout', 'paid-memberships-pro' ),
         description: __( 'Displays the Membership Checkout form.', 'paid-memberships-pro' ),
         category: 'pmpro',
         icon: {
            background: '#2997c8',
            foreground: '#ffffff',
            src: 'cart',
         },
         keywords: [ __( 'pmpro', 'paid-memberships-pro' ) ],
         supports: {
         },
         attributes: {
             level: {
                 type: 'integer',
             },
         },
         edit: props => {
             const { attributes: { fields }, className, setAttributes, isSelected } = props;
             return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                <div className={ className }>
                  <span>Paid Memberships Pro</span>
                  <span>Membership Checkout</span>
                </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
