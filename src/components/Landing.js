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

		const errorClass = `${field.meta.touched && field.meta.error ? 'alert alert-warning' : ''}`;
		return (
			<div>
				<div className="input-group input-group-lg mb-2">
					<input type="text" className="form-control zip-icon" placeholder="Enter ZIP code"
					{...field.input}
					/>
					<div className="input-group-append">
						<button type="submit" className="btn btn-primary">GET STARTED</button>
					</div>
				</div>
				<div className={errorClass}>
					{field.meta.touched && field.meta.error ? field.meta.error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values) {
		this.props.fetchStores(values);
		this.props.reset();
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<div className="container my-3 find-store">
					<div className="bg-target py-3 px-3">
						<div className="row justify-content-center align-items-center h-100">
							<div className="text-white col-md-8 text-center">
								<h1>Target exclusive offer.</h1>
								<h5 className="mb-3">$49 membership (reg. $99) + $15 credit with qualifying purchase.*</h5>
								<form className="mb-3"onSubmit={handleSubmit(this.onSubmit.bind(this))}>
									<div className="text-center">
											<Field
												name="zipcode"
												component={this.inputField}
											/>
									</div>
								</form>
								<p className="small-print w-75 mx-auto">*Membership offer valid for new members only. Target order of $100 or more must be 
								placed to qualify for $15 credit, which expires 30 days after qualifying order is placed 
								and can be applied to any order from Shipt.</p>
							</div>
						</div>
					</div>
				</div>
				
				{ this.props.stores ? <Stores stores={this.props.stores}/> : <div></div> }

				<div className="container py-3 px-3">
					<div className="row">
						<div className="col-md-8 offset-md-2 px-3">
							<h2 className="text-center">Everything you love about Target at your fingertips</h2>
						</div>
						<div className="col-md-4 text-center">
							<img src={step1} alt="step 1" className="img-fluid"/>
							<h4 className="px-5">Scroll through the aisles.</h4>
							<p className="px-3">Create an order from your local store in our app or
								on our website.
							</p>
						</div>

						<div className="col-md-4 text-center">
							<img src={step2} alt="step 2" className="img-fluid"/>
							<h4 className="px-5">Our shoppers work their magic.</h4>
							<p className="px-3">Connect with your shopper and get live updates from
								the aisles.
							</p>
						</div>

						<div className="col-md-4 text-center">
							<img src={step3} alt="step 3" className="img-fluid"/>
							<h4 className="px-5">We deliver your groceries.</h4>
							<p className="px-3">Schedule a delivery, and your order will arrive in
								as soon as 1 hour.
							</p>
						</div>

						<div className="col-md-4 offset-lg-4 my-5">
							<a className="btn btn-primary btn-lg btn-block" href="/">GET STARTED</a>
						</div>
					</div>
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