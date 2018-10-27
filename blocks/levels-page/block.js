/**
 * Block: PMPro Membership Levels
 *
 * Displays the Membership Levels template.
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
     'pmpro/levels-page',
     {
         title: __( 'Membership Levels Page', 'paid-memberships-pro' ),
         description: __( 'Displays the Membership Levels in the order sorted via the Memberships > Membership Levels admin.', 'paid-memberships-pro' ),
         category: 'pmpro',
         icon: {
            background: '#2997c8',
            foreground: '#ffffff',
            src: 'chart-bar',
         },
         keywords: [ __( 'pmpro', 'paid-memberships-pro' ) ],
         supports: {
         },
         attributes: {
         },
         edit: props => {
             const { className } = props;
             return [
                 <div className={ className }>
                   <span>Paid Memberships Pro</span>
                   <span>Membership Levels</span>
                 </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
