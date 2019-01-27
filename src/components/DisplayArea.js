import React from "react";
// import "./DisplayArea.css";

class DisplayArea extends React.Component {
	checkFontSize = () => {
		const { displayString } = this.props;

		let newFontSize = 68;

		if (displayString && displayString.toString().length > 8) {
			let numOfChar = displayString.toString().length;
			newFontSize =
				Math.round(490 * Math.pow(numOfChar, -0.95) * 10) / 10;
		}
		// console.log(`Char: ${displayString.toString().length}, fontsize: ${newFontSize}`)
		return newFontSize;
	};

	render() {
		const { msg, displayString } = this.props;
		return (
			<div className="calc-display">
				<div className="calc-display-operation">{msg}</div>
				<div className="calc-display-value">
					<p style={{ fontSize: this.checkFontSize() + "px" }}>
						{displayString}
					</p>
				</div>
			</div>
		);
	}
}

export default DisplayArea;