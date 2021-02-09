import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { observer, inject } from 'mobx-react'
import PantsFlickity from './PantsFlickity'
import ShirtsFlickity from './ShirtsFlickity'
import ShoesFlickity from './ShoesFlickity'

const BagRecommendations = inject('UserStore')(
	observer(props => {
		const [isLoading, setIsLoading] = useState(true)
		const [recommendedPants, setRecommendedPants] = useState([])
		const [recommendedShirts, setRecommendedShirts] = useState([])
		const [recommendedShoes, setRecommendedShoes] = useState([])
		const [likeList, setLikeList] = useState(props.UserStore.likedItems ?? [])
		const [userItems, setUserItems] = useState(props.UserStore.userItems ?? [])
		let recItemsShirts = []
		let recItemsPants = []
		let recItemsShoes = []

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
			recItemsShoes = []
			for (const liked of likeList) {
				for (const item of userItems) {
					if (
						liked.brand === item.brand &&
						liked.color === item.color &&
						liked.id !== item.id
					) {
						if (
							item.type.includes('pants') ||
							item.type.includes('short') ||
							item.type.includes('jeans')
						) {
							if (recItemsPants.findIndex(rec => rec.id === item.id) === -1)
								recItemsPants.push(item)
						} else if (
							item.type.includes('shirt') ||
							item.type.includes('top')
						) {
							if (recItemsShirts.findIndex(rec => rec.id === item.id) === -1)
								recItemsShirts.push(item)
						} else if (
							item.type.includes('shoe') ||
							item.type.includes('boot') ||
							item.type.includes('heel')
						) {
							if (recItemsShoes.findIndex(rec => rec.id === item.id) === -1)
								recItemsShoes.push(item)
						}
					}
				}
			}
			setRecommendedPants(recItemsPants)
			setRecommendedShirts(recItemsShirts)
			setRecommendedShoes(recItemsShoes)
			setIsLoading(false)
		}
		const shuffle = a => {
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[a[i], a[j]] = [a[j], a[i]]
			}
			return a
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
				<PantsFlickity data={recommendedPants} shuffle={shuffle} />
				<ShirtsFlickity data={recommendedShirts} shuffle={shuffle} />
				<ShoesFlickity data={recommendedShoes} shuffle={shuffle} />
			</div>
		)
	}),
)

export default BagRecommendations
