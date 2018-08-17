/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockDescription,
  ColorPalette,
} = wp.editor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	PanelColor,
	FormToggle,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const { buttonText, buttonUrl, buttonAlignment, buttonBackgroundColor, buttonTextColor, buttonSize, buttonShape, buttonTarget } = this.props.attributes;

		// Button size values
		const buttonSizeOptions = [
			{ value: 'pmp-button-size-small', label: __( 'Small' ) },
			{ value: 'pmp-button-size-medium', label: __( 'Medium' ) },
			{ value: 'pmp-button-size-large', label: __( 'Large' ) },
			{ value: 'pmp-button-size-extralarge', label: __( 'Extra Large' ) },
		];

		// Button shape
		const buttonShapeOptions = [
			{ value: 'pmp-button-shape-square', label: __( 'Square' ) },
			{ value: 'pmp-button-shape-rounded', label: __( 'Rounded Square' ) },
			{ value: 'pmp-button-shape-circular', label: __( 'Circular' ) },
		];

		return (
		<InspectorControls key="inspector">
			<PanelBody>
				<PanelColor
					title={ __( 'Button2 Color' ) }
					colorValue={ buttonBackgroundColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Button2 Color' ) }
						value={ buttonBackgroundColor }
						onChange={ ( value ) => { this.props.setAttributes( { buttonBackgroundColor: value } ) } }
						colors={[
							{ color: '#00d1b2', name: 'teal' },
							{ color: '#3373dc', name: 'royal blue' },
							{ color: '#209cef', name: 'sky blue' },
							{ color: '#22d25f', name: 'green' },
							{ color: '#ffdd57', name: 'yellow' },
							{ color: '#ff3860', name: 'pink' },
							{ color: '#7941b6', name: 'purple' },
							{ color: '#392F43', name: 'black' },
						]}
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Button2 Text Color' ) }
					colorValue={ buttonTextColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Button2 Text Color' ) }
						value={ buttonTextColor }
						onChange={ ( value ) => { this.props.setAttributes( { buttonTextColor: value } ) } }
						colors={[
							{ color: '#fff', name: 'white' },
							{ color: '#32373c', name: 'black' },
						]}
					/>
				</PanelColor>
				<SelectControl
					label={ __( 'Button2 Shape' ) }
					value={ buttonShape }
					options={ buttonShapeOptions.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( value ) => { this.props.setAttributes( { buttonShape: value } ) } }
				/>

			</PanelBody>
		</InspectorControls>
		);
	}
}
