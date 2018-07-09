/**
 * Block: PMPro Checkout Button
 *
 * Add a styled link to the PMPro pbr page for a
 * specific level.
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
     'pmpro/pbr-button',
     {
         title: __( 'PMPro pb Button', 'paid-memberships-pro' ),
         description: __( 'PBrx check out for a level.', 'paid-memberships-pro' ),
         category: 'common',
         icon: 'migrate',
         keywords: [
             __( 'buy', 'paid-memberships-pro' ),
             __( 'level', 'paid-memberships-pro' ),
         ],
         supports: {
         },
         attributes: {
             text: {
                 type: 'string',
                 default: 'Buy Now',
             },
             css_class: {
                 type: 'string',
                 default: 'wp-block-paid-memberships-pro-pbr-button',
             },
             level: {
                  type: 'integer'
             }
         },
         edit: props => {
             const { attributes: { text, level, css_class}, className, setAttributes, isSelected } = props;
             return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                <div
                    className={ className }
                >
                  <a class={css_class} >{text}</a>
                </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
