/**
 * Block: PBrx Button
 */

/**
 * External dependencies
 */
import classnames from 'classnames';
 /**
  * Block dependencies
  */
 import './style.scss';
 // import classnames from 'classnames';
 import Inspector from './inspector';
 /**
  * Internal block libraries
  */
 const { __ } = wp.i18n;
	const {
	    AlignmentToolbar,
	    BlockControls,
	    registerBlockType,
	    InspectorControls
	} = wp.blocks;
	 
	const {
	    PanelBody,
	    PanelRow
	} = wp.components;
	 
	const {
	    Fragment
	} = wp.element;

/**
	const {
		href,
		target,
		isPrimary,
		isLarge,
		isSmall,
		isToggled,
		isBusy,
		isDefault,
		isLink,
		isDestructive,
		className,
		disabled,
		focus,
		...additionalProps
	} = props;

	const classes = classnames( 'components-button', className, {
		'is-button': isDefault || isPrimary || isLarge || isSmall,
		'is-default': isDefault || isLarge || isSmall,
		'is-primary': isPrimary,
		'is-large': isLarge,
		'is-small': isSmall,
		'is-toggled': isToggled,
		'is-busy': isBusy,
		'is-link': isLink,
		'is-destructive': isDestructive,
	} );

	const tag = href !== undefined && ! disabled ? 'a' : 'button';
	const tagProps = tag === 'a' ? { href, target } : { type: 'button', disabled };

/**
 * WordPress dependencies
 * /
import { createElement, forwardRef } from '@wordpress/element';


	return createElement( tag, {
		...tagProps,
		...additionalProps,
		className: classes,
		autoFocus: focus,
		ref,
	} );
}
*/
 /**
  * Register block
  */
 export default registerBlockType(


     'pmpro/pbrx-button',
     {
         title: __( 'PBrx Butt0n', 'paid-memberships-pro' ),
         description: __( 'Let users check out for a level.', 'paid-memberships-pro' ),
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
                 default: 'wp-block-paid-memberships-pro-pbrx-button',
             },
             level: {
                  type: 'integer'
             },
		    category: {
		        type: 'string',
		        default: 'nature'
		    },
		    categoryAlign: {
		        type: 'string',
		        default: ''
		    },
		    imageFilter: {
		        type: 'string',
		        default: ''
		    }
         },
         edit: props => {
             const { attributes: { text, level, css_class, category, categoryAlign, imageFilter }, className, setAttributes, isSelected } = props;
    return (
    <Fragment>
        <InspectorControls>
            <PanelBody title={ __('Image Settings') }>
                <PanelRow>
                    <label>Set Filter</label>
                    { showForm() }
                </PanelRow>
                <PanelRow>
                    <label>Set Filter</label>
                    <form onSubmit={ setFilter }>
                        <select id="image-filter" value={ imageFilter } onChange={ setFilter }>
                            <option value="">None</option>
                            <option value="sepia">Sepia</option>
                            <option value="grayscale">Grayscale</option>
                        </select>
                    </form>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
        <div className={ props.className }>
            <BlockControls>
                <AlignmentToolbar
                    value={ categoryAlign }
                    onChange={ value => setAttributes( { categoryAlign: value } ) }
                />
            </BlockControls>
            <RandomImage filter={ imageFilter } category={ category } />
            { isSelected && ( showForm() ) }
        </div>
    </Fragment>
);

         },
         save() {
           return null;
         },
       }
 );

