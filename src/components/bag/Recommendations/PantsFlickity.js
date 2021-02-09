import React from 'react'
import Flickity from 'react-flickity-component'
import './Flickity.css'
import SwiperIcon from '@material-ui/icons/ArrowRightAltTwoTone';

const ShirtsFlickity = props => {
	const itemsToShow = 30
	return (
		<div className="shirtsFlickity">
			<h1>Recommended Pants</h1>
			<Flickity>
				{props.data.length > 0 &&
					props
						.shuffle(props.data)
						.filter((item, idx) => idx < itemsToShow)
						.map(i => (
							<a target="_blank" rel="noopener noreferrer" href={i.url}>
								<img src={i.image} alt={i.id} class="recImg" />
							</a>
						))}
			</Flickity>
		</div>
	)
}

export default ShirtsFlickity
