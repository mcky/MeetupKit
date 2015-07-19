import React, {Component, PropTypes, findDOMNode} from 'react'
import Router, {Locations, Location, Link} from 'react-router-component'
import moment from 'moment'


export default class EventsPage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		var events = this.props.data
		return (
			<div>
				<h1>Events</h1>
				<ul>
					{events.map(function(ev, index){
						return (
							<li key={index}>
								<Link href={`/events/${ev.id}`}>
									<b>{ev.name}</b> <br/>
									{ev.yes_rsvp_count} <br/>
									{moment(ev.time).format('MMM DD')} <br/>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

// EventsPage.defaultProps = {data: {events: []}}
