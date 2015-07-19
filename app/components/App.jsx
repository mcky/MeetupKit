import React, {Component} from 'react'
import {Link} from 'react-router-component'
import Routes from './Routes.jsx'

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<nav>
					<Link href="/">Home</Link> - <Link href="/events">Events</Link>
				</nav>

				<Routes {...this.props} />
			</div>
		)
	}
}
