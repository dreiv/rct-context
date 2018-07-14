import React, { Component } from 'react'
import { DealerContext } from './DealerProvider'

export default class DealerActions extends Component {
	render() {
		return (
			<DealerContext.Consumer>
				{({ updateDealerName, state: { editing, name } }) => (
					<React.Fragment>
						{editing && (
							<input
								type="text"
								defaultValue={name}
								onChange={({ target: { value } }) => updateDealerName(value)}
							/>
						)}
					</React.Fragment>
				)}
			</DealerContext.Consumer>
		)
	}
}
