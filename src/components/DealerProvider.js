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
						this.setState({ name: value.target.value })
					},
					toggleEditing: () => {
						if (this.state.editing) {
							this.setState({ editing: false })
						} else {
							this.setState({ editing: true })
						}
					},
				}}
			>
				{this.props.children}
			</DealerContext.Provider>
		)
	}
}
