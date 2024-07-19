import React from 'react';
import './style/Eleven.css' ; 

function Eleven() {

  let quotes = [
    "Avoid daydreaming about the years to come.", "You are the most important person in your whole life.", "Always be true to who you are, and ignore what other people have to say about you.", "Always be true to who you are, and ignore what other people have to say about you.", "Only demonstrate your strength when its really requires", "Your really stregthen is waiting in the cave you fear to enter", "Decide, Do, Defeat"
  ] ; 

  const randomIndex = Math.floor(Math.random()*quotes.length) ; 

  const quote = quotes[randomIndex] ; 

  return (
    <div className='quote-container'>
      <div className='quote'>
        {quote}
      </div>
    </div>
  )
}

export default Eleven