import React from 'react'
import '../ContactCard/ContactCard.css'

export default function ContactCard(props) {
  return (
    <>
        <main id='contactContainer'>
            <div id='contactProfileSec'>
                <img src={props.image} id='contactProfileImg' alt="" />
            </div>
            <div id='contactNameSec'>
                <label htmlFor="">{props.name}</label>
            </div>
        </main>
    </>
  )
}
