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
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Enter Zipcode"
				{...field.input}
				/>
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
				<div className="container">
					<div className="bg-target">
						<div className="text-center text-white">
							<h1 className="">Target exclusive offer.</h1>
							<h2>$49 membership (reg. $99) + $15 credit with qualifying purchase.*</h2>
							<form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
								<div className="form-row no-gutters justify-content-center">
										<Field
											name="zipcode"
											component={this.inputField}
										/>
										<div className="form-group">
											<button type="submit" className="btn btn-primary">Get Started</button>
										</div>
								</div>
							</form>
							<p>*Membership offer valid for new members only. Target order of $100 or more must be 
							placed to qualify for $15 credit, which expires 30 days after qualifying order is placed 
							and can be applied to any order from Shipt.</p>
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