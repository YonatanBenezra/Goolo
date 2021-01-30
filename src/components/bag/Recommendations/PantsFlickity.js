import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import './Flickity.css'
import OnImagesLoaded from 'react-on-images-loaded'
import CircularProgress from '@material-ui/core/CircularProgress'

const PantsFlickity = props => {
	const itemsToShow = 50
	const [isLoading, setIsLoading] = useState(true)
	const [showImages, setShowImages] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		if (props.data.length >= itemsToShow) {
			setIsLoading(false)
		} else {
			//There are no user cards!
		}
	}
	)
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
				<div className="pantsFlickity">
					<h1>Recommended Pants</h1>
					<OnImagesLoaded
						onLoaded={() => setShowImages(true)}
						onTimeout={() => setShowImages(true)}
						timeout={7000}
					>
						<div style={{ opacity: showImages ? 1 : 0 }}>
							<Flickity>
								{props.data.length > 0 &&
									props.data
										.splice(
											Math.floor(Math.random() * props.data.length),
											props.data.length > itemsToShow ? itemsToShow : props.data.length,
										)
										.map(i => (
											<a target="_blank" rel="noopener noreferrer" href={i.url} className="swiper-a">
												<img src={i.image} alt={i.id} class="recImg" />
											</a>
										))}
							</Flickity>
						</div>
					</OnImagesLoaded>
				</div>
			)
	}

export default PantsFlickity
