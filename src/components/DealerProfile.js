import React, { Component } from 'react'
import { DealerContext } from './DealerProvider'

export default class DealerProfile extends Component {
	render() {
		return (
			<div className="dealer-profile">
				<DealerContext.Consumer>
					{({ toggleEditing, state: { editing, name, dealerId } }) => {
						const btnText = editing ? 'save' : 'edit'

						return (
							<React.Fragment>
								<p>
									Name: {name}
									<button onClick={toggleEditing}>{btnText}</button>
								</p>
								<p>Dealer ID: {dealerId}</p>
							</React.Fragment>
						)
					}}
				</DealerContext.Consumer>
			</div>
		)
	}
}
