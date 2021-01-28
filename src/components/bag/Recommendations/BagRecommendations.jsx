import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import PantsFlickity from './PantsFlickity'
import ShirtsFlickity from './ShirtsFlickity'

const BagRecommendations = inject('UserStore')(
	observer(props => {
		useEffect(() => {
			if (localStorage.getItem('user')) {
				props.UserStore.setUser(JSON.parse(localStorage.getItem('user')))
			}
		}, [])

		return (
			<div>
				<PantsFlickity />
				<ShirtsFlickity />
			</div>
		)
	}),
)

export default BagRecommendations
