import React, { useEffect, useState } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = () => {
	const [ orders, setOrders ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		axios
			.get('/orders.json')
			.then((result) => {
				const fetchedOrders = [];

				for (let key in result.data) {
					fetchedOrders.push({
						...result.data[key],
						id: key
					});
				}
				setLoading(false);
				setOrders(fetchedOrders);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);

	return (
		<div>
			{orders.map((order) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)}
		</div>
	);
};

export default withErrorHandler(Orders, axios);
