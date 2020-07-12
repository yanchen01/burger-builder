import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Layout.module.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	SideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	SideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
