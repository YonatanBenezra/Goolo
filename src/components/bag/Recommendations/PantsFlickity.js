import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import './Flickity.css'
import { observer, inject } from 'mobx-react'

const PantsFlickity = inject('UserStore')(
	observer(props => {
		const [likeList, setLikeList] = useState(props.UserStore.likedItems ?? [])
		const [userItems, setUserItems] = useState(props.UserStore.userItems ?? [])
		const [recommended, setRecommended] = useState([])
		let recItems = []
		const itemsToShow = 30

		useEffect(() => {
			initialProcessing()
		}, [likeList, userItems])

		useEffect(() => {
			setLikeList(props.UserStore.userItems ?? [])
			setUserItems(props.UserStore.userItems ?? [])
		}, [props.UserStore.likedItems, props.UserStore.userItems])

		const initialProcessing = () => {
			recItems = []
			for (const liked of likeList) {
				for (const item of userItems) {
					if (
						(liked.brand === item.brand || liked.color === item.color) &&
						item.type.includes('pants') &&
						liked.id !== item.id
					) {
						recItems.push(item)
					}
				}
			}
			setRecommended(recItems)
		}

		return (
			<div className="pantsFlickity">
				<h1>Recommended Pants</h1>
				<Flickity>
					{recommended.length > 0 &&
						recommended
							.splice(
								0,
								recommended.length > itemsToShow
									? itemsToShow
									: recommended.length,
							)
							.map(i => (
								<a target="_blank" rel="noopener noreferrer" href={i.url}>
									<img src={i.image} alt={i.id} class="recImg" />
								</a>
							))}
				</Flickity>
			</div>
		)
	}),
)

export default PantsFlickity
