import React, { useState, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import './Swiper.css'
import { observer, inject } from 'mobx-react'
import Axios from 'axios'
const Swiper = inject('UserStore')(observer(props => {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
  const likeList = props.UserStore.likedItems
  const userItems = props.UserStore.userItems
  const recItems = []

  for (const liked of likeList) {
    for (const item of userItems) {
      if(recItems.length<150){
        if ((liked.brand === item.brand || liked.color === item.color) && (item.type.includes('pants') && liked.id !== item.id)){
          recItems.push(item)
          }
        } else
      if(recItems.length<300){
        if ((liked.brand === item.brand || liked.color === item.color) && (item.type.includes('shirt') && liked.id !== item.id)){
          recItems.push(item)
        }
      }  
    }
  }
  shuffleArray(recItems)
  console.log(recItems)
  let items = recItems.splice(0,40)
  let charactersState = items // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.
  const [characters, setCharacters] = useState(items)
  const childRefs = useMemo(() => Array(items.length).fill(0).map(i => React.createRef()), [])

  const swiped = async (direction, item) => {
    let mounted = true;
    const bool = direction === 'right' ? 1 : 0
    try{
      if(mounted){
        await Axios.post(`http://localhost:5000/${bool}/${item.id}/${props.UserStore.user.id}`)
      }
    } catch (err) {
      console.log('error');
    }
    return () => mounted = false
  }

  const outOfFrame = (id) => {
    charactersState = charactersState.filter(character => character.id !== id)
    setCharacters(charactersState)
  }

  return (
      <>
        <div className='cardContainer'>
        <h1>Goolo</h1>
        <div className='swipeContainer'>
          {characters.map((character, index) =>
            <TinderCard ref={childRefs[index]} className='swipe' key={character.id} onSwipe={(dir) => swiped(dir, character)} onCardLeftScreen={() => outOfFrame(character.id)}>
              <div style={{ backgroundImage: `url(' ${character.image} ')` }} className='card'>
              </div>
                {/* <h1>{character.type}</h1> */}
            </TinderCard>
          )}
          </div>
        </div>
      </>
  )
}))

export default Swiper
