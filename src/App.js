import React, { Component } from 'react'
import DealerProvider from './components/DealerProvider'
import { DealerCard } from './components/DealerCard'
import './App.css'

class App extends Component {
	render() {
		return (
			<DealerProvider>
				<h1>Dealer Card</h1>
				<DealerCard />
			</DealerProvider>
		)
	}
}

export default App
