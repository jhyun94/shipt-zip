import React , { Component } from 'react';

class Stores extends Component {

	renderStores() {
		console.log(this.props.stores);
		return (
			<div></div>
		)
	}


	render() {
		return (
			<div className="container">
				<h4>Delivering From</h4>
				<div className="row">
					{this.renderStores()}
				</div>
				<div className="text-center">
					<a href="/" className="btn btn-primary btn-lg">Get Started</a>
				</div>
			</div>
		)
	}
}

export default Stores;