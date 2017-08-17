import React, { Component } from 'react';

import data from '../data';

export class Show extends Component {

	componentWillMount () {
		const contactId = this.props.match.params.contactId;

		this.setState({
			contact: data.filter(contact => contact.id === parseInt(contactId, 10))[0],
		});
	}

	render() {
		return (
			<div id='show'>
				<h2> {this.state.contact.name} </h2>
			</div>
		);
	}
}

export default Show;