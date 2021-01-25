import React from 'react'
import { observer, inject } from 'mobx-react'
import PantsFlickity from './PantsFlickity'
import ShirtsFlickity from './ShirtsFlickity'

const BagRecommendations = inject('UserStore')(observer(props => {
    return (
        <div>
            <PantsFlickity />
            <ShirtsFlickity />
        </div>
    )
}))

export default BagRecommendations
