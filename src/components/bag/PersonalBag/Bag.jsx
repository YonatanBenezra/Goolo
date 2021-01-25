import React from 'react'
import { observer, inject } from 'mobx-react'
import Drawer1 from './Drawers/Drawer1'
import Drawer2 from './Drawers/Drawer2'
import Drawer3 from './Drawers/Drawer3'
import Drawer4 from './Drawers/Drawer4'
import './BagStyles.css'

const bag = inject('UserStore')(observer(props => {
    return (
        <div class='drawerContainer'>
            <h1>Here are your recommended bags!</h1>
            <div class='Drawer'><p class='drawerText'>4 Skinny jeans for the winter! just the way you like it</p><Drawer1 /></div>
            <div class='Drawer'><p class='drawerText'>4 Skinny jeans for the winter! just the way you like it</p><Drawer2 /></div>
            <div class='Drawer'><p class='drawerText'>4 Skinny jeans for the winter! just the way you like it</p><Drawer3 /></div>
            <div class='Drawer'><p class='drawerText'>4 Skinny jeans for the winter! just the way you like it</p><Drawer4 /></div>
        </div>
    )
}))

export default bag
