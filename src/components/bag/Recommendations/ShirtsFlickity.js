import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import './Flickity.css'

const ShirtsFlickity = props => {
	const itemsToShow = 50

	return (
		<div className="shirtsFlickity">
			<h1>Recommended Shirts</h1>
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
