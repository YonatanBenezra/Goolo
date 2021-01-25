import React, { useState, useMemo, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './Swiper.css'
import { observer, inject } from 'mobx-react'
import Axios from 'axios'

const Swiper = inject('UserStore')(observer(props => {
  let items = props.UserStore.userItems.splice(0,40)
  let charactersState = items // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.
  const [characters, setCharacters] = useState(items)
  const childRefs = useMemo(() => Array(items.length).fill(0).map(i => React.createRef()), [])

  const swiped = async (direction, item) => {
    const bool = direction === 'right' ? 1 : 0
    try{
      await Axios.post(`http://localhost:5000/${bool}/${item.id}/${props.UserStore.user.id}`)
    } catch (err) {
      console.log('error');
    }
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
