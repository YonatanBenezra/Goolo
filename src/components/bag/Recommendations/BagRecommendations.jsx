import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { observer, inject } from 'mobx-react'
import PantsFlickity from './PantsFlickity'
import ShirtsFlickity from './ShirtsFlickity'

const BagRecommendations = inject('UserStore')(
	observer(props => {
		const [isLoading, setIsLoading] = useState(true)
		const [recommendedPants, setRecommendedPants] = useState([])
		const [recommendedShirts, setRecommendedShirts] = useState([])
		const [likeList, setLikeList] = useState(props.UserStore.likedItems ?? [])
		const [userItems, setUserItems] = useState(props.UserStore.userItems ?? [])
		let recItemsShirts = []
		let recItemsPants = []

		useEffect(() => {
			if (localStorage.getItem('user')) {
				props.UserStore.setUser(JSON.parse(localStorage.getItem('user')))
			} else window.location = '/'
		}, [])

		useEffect(() => {
			setLikeList(props.UserStore.likedItems ?? [])
		}, [props.UserStore.likedItems])

		useEffect(() => {
			setUserItems(props.UserStore.userItems ?? [])
		}, [props.UserStore.userItems])

		useEffect(() => {
			if (likeList.length > 0 && userItems.length > 0) initialProcessing()
		}, [likeList, userItems])

		const initialProcessing = () => {
			setIsLoading(true)
			recItemsShirts = []
			recItemsPants = []
			for (const liked of likeList) {
				for (const item of userItems) {
					if (
						(liked.brand === item.brand && liked.color === item.color) &&
						(liked.id !== item.id)
						) {
						if (item.type.includes('pants') || item.type.includes('short') || item.type.includes('jeans')) {
							if(recItemsPants.some(pants => pants.name === item.name))
							recItemsPants.push(item)
						} else if (item.type.includes('shirt')) {
							recItemsShirts.push(item)
						}
					}
				}
			}
			setRecommendedPants(recItemsPants)
			setRecommendedShirts(recItemsShirts)
			setIsLoading(false)
		}

		return isLoading ? (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'grid',
					placeItems: 'center',
				}}
			>
				<CircularProgress color="secondary" />
			</div>
		) : (
			<div className="recommendationsContainer">
				<PantsFlickity data={recommendedPants} />
				<ShirtsFlickity data={recommendedShirts} />
			</div>
		)
	}),
)

export default BagRecommendations
