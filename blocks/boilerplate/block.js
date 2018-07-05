/**
 * Block: Boilerplate
 *
 * A blank block
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
} = wp.blocks;

// Import components as you need them
/*
const {
} = wp.components;

const {
} = wp.editor;
*/

 /**
  * Register block
  */
 export default registerBlockType(
     'pmpro/boilerplate',
     {
         title: __( 'Boilerplate', 'paid-memberships-pro' ),
         description: __( 'This is a blank block.', 'paid-memberships-pro' ),
         category: 'common',
         icon: 'sos',
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
                  "Boilerplate Placeholder"
                </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
