import React, { useState } from 'react';


const charComponent = (props) => {
	//const [hook, setHook] = useState(hook);
	const charComponentStyle = {
		margin: '16px',
		display: 'inline-block',
		border: '1px solid black',
		padding: '16px',
		textAlign: 'center',
	}

	return (
		<div style={charComponentStyle}>
			<div onClick={props.click}>{props.charValue}</div>
		</div>
	);
};

export default charComponent;
