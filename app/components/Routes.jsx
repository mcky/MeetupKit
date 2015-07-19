import React, {Component} from 'react'
import Router, {Locations, Location} from 'react-router-component'

import HomePage from './HomePage.jsx'
import EventsPage from './EventsPage.jsx'
import EventDetail from './EventDetail.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var p = this.props
		return (
			<Locations path={p.path}>
				<Location path="/" handler={HomePage} data={p.data} />
				<Location path="/events" handler={EventsPage} data={p.data} />
				<Location path="/events/:id" handler={EventDetail} data={p.data} />
			</Locations>
		)
	}
}

