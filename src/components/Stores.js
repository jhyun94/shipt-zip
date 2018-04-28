import React , { Component } from 'react';
import _ from 'lodash';

class Stores extends Component {

	renderStores() {
		const stores = _.sortBy(this.props.stores, 'name');

		return (
			_.map( stores,  (store) => {
				return (
					<div key={store.id} className="col-md-4">
						<div className="text-center">
							<h4>{store.name}</h4>
							<p>{store.launch_date}</p>
						</div>
					</div>
				)
			})
		)
	}


	render() {
		return (
			<div className="container">
				<h4 className="text-center">Delivering From</h4>
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