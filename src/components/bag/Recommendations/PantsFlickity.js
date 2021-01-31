import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import './Flickity.css'

const ShirtsFlickity = props => {
	const itemsToShow = 50
console.log(props.data)
	return (
		<div className="shirtsFlickity">
			<h1>Recommended Pants</h1>
			<Flickity>
				{props.data.length > 0 &&
					props.data
						.splice(
							Math.floor(Math.random() * props.data.length),
							props.data.length > itemsToShow ? itemsToShow : props.data.length,
						)
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
