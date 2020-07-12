import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import Aux from '../../../../hoc/Auxiliary';

const SideDrawer = (props) => {
	let attachedClasses = [ classes.SideDrawer, classes.Close ];
	if (props.open) {
		attachedClasses = [ classes.SideDrawer, classes.Open ];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

SideDrawer.propTypes = {
	closed: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
};

export default SideDrawer;
