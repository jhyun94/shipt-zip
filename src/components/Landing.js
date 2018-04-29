import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import isPostalCode from 'validator/lib/isPostalCode';

import Stores from './Stores';
import * as actions from '../actions'
import step1 from '../images/step-1.png';
import step2 from '../images/step-2.png';
import step3 from '../images/step-3.png';


class Landing extends Component {

	inputField(field) {
		return (
			<div>
				<div className="input-group justify-content-center input-group-lg">
					<input type="text" className="form-control" placeholder="Enter ZIP code"
					{...field.input}
					/>
					<div className="input-group-append">
						<button type="submit" className="btn btn-primary">GET STARTED</button>
					</div>
				</div>
				<div className="text-help">
					{field.meta.touched && field.meta.error ? field.meta.error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values) {
		this.props.fetchStores(values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<div className="container my-3">
					<div className="bg-target py-3 px-3">
						<div className="row">
							<div className="text-white col-md-8 offset-md-2 text-center">
								<h1 className="h1 display-4">Target exclusive offer.</h1>
								<h5>$49 membership (reg. $99) + $15 credit with qualifying purchase.*</h5>
								<form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
									<div className="text-center">
											<Field
												name="zipcode"
												component={this.inputField}
											/>
									</div>
								</form>
								<p><small>*Membership offer valid for new members only. Target order of $100 or more must be 
								placed to qualify for $15 credit, which expires 30 days after qualifying order is placed 
								and can be applied to any order from Shipt.</small></p>
							</div>
						</div>
					</div>
				</div>
				
				{ this.props.stores ? <Stores stores={this.props.stores}/> : <div></div> }

				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img src={step1} alt="step 1" className="img-fluid"/>
							<h4>Scroll through the aisles.</h4>
							<p>Create an order from your local store in our app or
								on our website.
							</p>

						</div>

						<div className="col-md-4">
							<img src={step2} alt="step 2" className="img-fluid"/>
							<h4>Our shoppers work their magic.</h4>
							<p>Connect with your shopper and get live updates from
								the aisles.
							</p>
						</div>

						<div className="col-md-4">
							<img src={step3} alt="step 3" className="img-fluid"/>
							<h4>We deliver your groceries.</h4>
							<p>Schedule a delivery, and your order will arrive in
								as soon as 1 hour.
							</p>
						</div>
					</div>
				</div>

				<div className="text-center my-4">
					<a className="btn btn-primary btn-lg" href="/">Get Started</a>
				</div>
			</div>
		)
	}
}

function validate(field) {
	let errors = {};
	const zip = field.zipcode;

	if (!isPostalCode(zip || '', 'US')) {
		errors.zipcode = 'Enter a valid ZIP code';
	}

	return errors;
}

function mapStateToProps({stores}) {
	return { stores }
}

export default reduxForm({
	validate: validate,
	form: 'zipcode'
})(connect(mapStateToProps, actions)(Landing))