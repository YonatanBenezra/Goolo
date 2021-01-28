import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import TinderCard from 'react-tinder-card'
import './Swiper.css'
import { observer, inject } from 'mobx-react'
import Axios from 'axios'

const Swiper = inject('UserStore')(
	observer(props => {
		const cardsToshow = 40
		const [isLoading, setIsLoading] = useState(true)
		const [characters, setCharacters] = useState([])
		const [alert, setAlert] = useState(false)

		useEffect(() => {
			if (localStorage.getItem('user')) {
				props.UserStore.setUser(JSON.parse(localStorage.getItem('user')))
			} else window.location = '/'
		}, [])

		useEffect(() => {
			setIsLoading(true)
			if (props.UserStore.userItems.length >= cardsToshow) {
				let items = props.UserStore.userItems.splice(0, cardsToshow)
				setCharacters(items)
				setIsLoading(false)
			} else {
				//There are no user cards!
			}
		}, [props.UserStore.userItems])

		const swiped = async (direction, item) => {
			const bool = direction === 'right' ? 1 : 0
			try {
				await Axios.post(
					`http://localhost:5000/${bool}/${item.id}/${props.UserStore.user.id}`,
				)
			} catch (err) {
				console.log('error')
			}
		}

		const outOfFrame = index => {
			if (index === 0) setAlert(true)
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
			<>
				<div className="cardContainer">
					<h1>Goolo</h1>
					<p
						style={{ cursor: 'pointer' }}
						onClick={() => {
							localStorage.clear()
							window.location = '/'
						}}
					>
						Logout
					</p>
					<div className="swipeContainer">
						{characters &&
							characters.length > 0 &&
							characters.map((character, index) => (
								<TinderCard
									className="swipe"
									key={character.id}
									onSwipe={dir => swiped(dir, character)}
									onCardLeftScreen={() => outOfFrame(index)}
								>
									<div
										style={{ backgroundImage: `url(' ${character.image} ')` }}
										className="card"
									></div>
									{/* <h1>{character.type}</h1> */}
								</TinderCard>
							))}
						{alert && <h1>No cards Left</h1>}
					</div>
				</div>
			</>
		)
	}),
)

export default Swiper
