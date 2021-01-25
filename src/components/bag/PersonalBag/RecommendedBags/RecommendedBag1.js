import React from "react";
import Flickity from "react-flickity-component";
import "../BagStyles.css";
import { observer, inject } from 'mobx-react'

const RecommendedBag1 = inject('UserStore')(observer(props => {
  const likeList = props.UserStore.likedItems
  const userItems = props.UserStore.userItems
  const recItems = []
  for (const item of userItems) {
    for (const liked of likeList) {
      if(item.type.includes('pants')){
        if (liked.color === item.color && liked.brand === item.brand){
            if(!recItems.includes(item.id)){
              recItems.push(item)
            }
          }
        }
      }
    }

  return (
    <div>
      <p>you have 4 pants in this bag!</p>
    <div className="PantsFlickity">
    <Flickity>
      {recItems.splice(0,4).map(
        i => <img src={i.image} alt={i.id}></img>
      )}
    </Flickity>
    </div>
  </div>
  );
}))
export default RecommendedBag1