import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
			{console.log(props)}
			<div className={classes.Label}>{props.label}</div>
			<button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
				Less
			</button>
			<button className={classes.More} onClick={props.added}>
				More
			</button>
		</div>
	);
};

BuildControl.propTypes = {
	label: PropTypes.string.isRequired,
	removed: PropTypes.func.isRequired,
	added: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired
};

export default BuildControl;
