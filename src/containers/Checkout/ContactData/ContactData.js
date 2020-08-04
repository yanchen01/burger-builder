import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

const ContactData = (props) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ address, setAddress ] = useState({ street: '', postalCode: '' });
	const [ loading, setLoading ] = useState(false);

	const orderHandler = (event) => {
		event.preventDefault();
		setLoading(true);

		const order = {
			ingredients: props.ingredients,
			price: props.price,
			customer: {
				name: 'Yan Chen',
				address: {
					street: 'Teststreet 1',
					zipCode: '22002',
					country: 'USA'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
                setLoading(false);
                props.history.push('/');
			})
			.catch((err) => {
				setLoading(true);
				console.log(err);
			});
	};

	return (
		<div className={classes.ContactData}>
			<h4>Enter your Contact Data</h4>

			{loading ? (
				<Spinner />
			) : (
				<form>
					<input className={classes.Input} type="text" name="name" placeholder="Your name" />
					<input className={classes.Input} type="text" name="email" placeholder="Your email" />
					<input className={classes.Input} type="text" name="street" placeholder="Street" />
					<input className={classes.Input} type="text" name="postal" placeholder="Postal" />
					<Button btnType="Success" clicked={orderHandler}>
						ORDER
					</Button>
				</form>
			)}
		</div>
	);
};

export default ContactData;
