/**
 * Block: PMPro Checkout Button
 *
 * Add a styled link to the PMPro checkout page for a
 * specific level.
 *
 */
 /**
  * Block dependencies
  */
 import './style.scss';
 import classnames from 'classnames';
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
    PanelRow,
    TextControl,
} = wp.components;

const {
    RichText,
    InspectorControls,
} = wp.editor;

 /**
  * Register block
  */
 export default registerBlockType(
     'pmpro/account-membership-section',
     {
         title: __( 'PMPro Membership Account: Memberships', 'paid-memberships-pro' ),
         description: __( 'Displays the members\'s membership information.', 'paid-memberships-pro' ),
         category: 'pmpro',
         icon: 'groups',
         keywords: [
         ],
         supports: {
         },
         attributes: {
         },
         edit: props => {
             const { className } = props;
             return [
                 <div className={ className }>
                   <span>Paid Memberships Pro</span>
                   <span>Membership Account: My Memberships</span>
                 </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
