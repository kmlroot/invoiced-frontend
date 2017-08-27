import React, { Component } from 'react';

import { observer } from 'mobx-react';

@observer(['contacts'])
export class Show extends Component {

	componentWillMount () {
		const contact = this.props.contacts.find(this.props.match.params.contactId);
		this.setState({ contact });
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