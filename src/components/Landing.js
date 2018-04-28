import React, { Component } from 'react';


class Landing extends Component {

	render() {
		return (
			<div className="container">
				<div className="bg-target">
					<div className="text-center text-white">
						<h1 className="">Target exclusive offer.</h1>
						<h2>$49 membership (reg. $99) + $15 credit with qualifying purchase.*</h2>
						<form className="form-inline justify-content-center">
							<div className="form-group">
								<input placeholder="Enter Zip code" className="form-control" type="text" />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary">Get Started</button>
							</div>
						</form>
						<p>*Membership offer valid for new members only. Target order of $100 or more must be 
						placed to qualify for $15 credit, which expires 30 days after qualifying order is placed 
						and can be applied to any order from Shipt.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;