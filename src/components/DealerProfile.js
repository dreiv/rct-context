import React, { Component } from 'react'
import { DealerContext } from './DealerProvider'

export default class DealerProfile extends Component {
	render() {
		return (
			<div className="dealer-profile">
				<DealerContext.Consumer>
					{context => {
						let btnText = 'edit'
						if (context.state.editing) {
							btnText = 'save'
						}
						return (
							<React.Fragment>
								<p>
									Name: {context.state.name}
									<button onClick={context.toggleEditing}>{btnText}</button>
								</p>
								<p>Dealer ID: {context.state.dealerId}</p>
							</React.Fragment>
						)
					}}
				</DealerContext.Consumer>
			</div>
		)
	}
}
