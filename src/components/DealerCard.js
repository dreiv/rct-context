import React from 'react'
import DealerProfile from './DealerProfile'
import DealerActions from './DealerActions'
import './DealerCard.css'

export const DealerCard = () => (
	<div className="dealer-page">
		<DealerProfile />
		<DealerActions />
	</div>
)
