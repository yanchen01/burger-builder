import React, { useState, useEffect } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import { Route } from 'react-router-dom';

const Checkout = (props) => {
	const [ ingredients, setIngredients ] = useState({ salad: 1, meat: 1, cheese: 1, bacon: 1 });
	const [ totalPrice, setTotalPrice ] = useState(0);

	useEffect(() => {
		const query = new URLSearchParams(props.location.search);
		const ingredients = {};
		let price = 0;

		for (let param of query.entries()) {
			if (param[0] === 'price') {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}
		setIngredients(ingredients);
		setTotalPrice(price);
	}, []);

	const checkoutCancelledHandler = () => {
		// direct user back to previous path
		props.history.goBack();
	};

	const checkoutContinuedHandler = () => {
		// direct to path /checkout/contact-data
		props.history.replace('/checkout/contact-data');
	};

	return (
		<div>
			<CheckoutSummary
				ingredients={ingredients}
				checkoutCancelled={checkoutCancelledHandler}
				checkoutContinued={checkoutContinuedHandler}
			/>
			<Route
				path={props.match.path + '/contact-data'}
				render={(props) => <ContactData ingredients={ingredients} price={totalPrice} {...props}/>}
			/>
		</div>
	);
};

export default Checkout;
