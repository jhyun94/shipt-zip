import React , { Component } from 'react';
import _ from 'lodash';

class Stores extends Component {

	renderStores() {
		const stores = _.sortBy(this.props.stores, 'name');

		return (
			_.map( stores,  (store) => {
				return (
					<div key={store.id} className="col-md-3 my-4">
						<div className="text-center">
							<h3 className="mb-3">{store.name}</h3>
							<p className="text-secondary"><small>{this.checkDate(store.launch_date)}</small></p>
						</div>
					</div>
				)
			})
		)
	}

	checkDate(date) {
		const currentTime = new Date().getTime();
		const launchTime = new Date(date).getTime();
		
		if (launchTime < currentTime) {
			return 'Now Available';
		}

		const month = new Date(date).getUTCMonth() + 1;
		const year = new Date(date).getUTCFullYear().toString().substr(2);

		return `Coming ${month}/${year}`

	}

	isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


	render() {
		if ( this.isEmpty(this.props.stores)) {
			return (
				<div className="my-5 text-center">
					<h4>Coming soon in your area!</h4>
				</div>
			)
		}

		return (
			<div className="container mb-3">
				<p className="text-center"><small>Delivering From:</small></p>
				<div className="row justify-content-center">
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