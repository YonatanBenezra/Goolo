import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import './Flickity.css'
import { observer, inject } from 'mobx-react'

const ShirtsFlickity = props => {
	const itemsToShow = 30

	return (
		<div className="shirtsFlickity">
			<h1>Recommended Shirts</h1>
			<Flickity>
				{props.data.length > 0 &&
					props.data
						.splice(
							0,
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
