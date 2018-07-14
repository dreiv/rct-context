import React, { Component } from 'react'

export const DealerContext = React.createContext()

export default class DealerProvider extends Component {
	state = {
		name: 'New Dealer',
		dealerId: 1234,
		groupId: 1,
		editing: false,
	}
	render() {
		return (
			<DealerContext.Provider
				value={{
					state: this.state,
					updateDealerName: value => {
						this.setState({ name: value })
					},
					toggleEditing: () => {
						this.setState(prevState => ({ editing: !prevState.editing }))
					},
				}}
			>
				{this.props.children}
			</DealerContext.Provider>
		)
	}
}
