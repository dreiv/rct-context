import React, { Component } from 'react'
import { DealerContext } from './DealerProvider'

export default class DealerActions extends Component {
	render() {
		return (
			<DealerContext.Consumer>
				{context => (
					<React.Fragment>
						{context.state.editing ? (
							<input
								type="text"
								defaultValue={context.state.name}
								onChange={context.updateDealerName.bind(this)}
							/>
						) : null}
					</React.Fragment>
				)}
			</DealerContext.Consumer>
		)
	}
}
