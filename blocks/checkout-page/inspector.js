/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    PanelBody,
    PanelRow,
    TextControl,
} = wp.components;
const {
    InspectorControls,
} = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { level }, setAttributes } = this.props;

        return (
          <InspectorControls>
          <PanelBody>
             <TextControl
                 label={ __( 'Membership Level', 'paid-memberships-pro' ) }
                 help={ __( 'Specify a level for Membership Checkout. Leave blank to force a redirect to your Membership Levels page.', 'paid-memberships-pro' ) }
                 value={ level }
                 onChange={ level => setAttributes( { level } ) }
             />
          </PanelBody>
          </InspectorControls>
        );
    }
}
