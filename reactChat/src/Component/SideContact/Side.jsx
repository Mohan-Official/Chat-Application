import React from 'react'
import '../SideContact/Side.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus as Add, faEllipsis as ThreeDot } from '@fortawesome/free-solid-svg-icons'
import Searchbar from '../SearchBar/Searchbar'
import ContactCard from '../ContactCard/ContactCard'
import ContactData from '../../assets/Contact.json'

export default function Side() {
  return (
    <>
        <main id='sideContainer'>
            <nav id='selfNavSection'>
                <div id='profileSection'>
                    <img src="https://wallpapercave.com/wp/wp11998806.jpg" id='myProfile' alt="" />
                </div>
                <div id='selfNameSection'>
                    <label>
                        Steve Rogers
                    </label>
                </div>
                <div id='selfIconSection'>
                    <FontAwesomeIcon icon={Add} className='selfIcon Add'/>
                    <FontAwesomeIcon icon={ThreeDot} className='selfIcon Spread'/>
                </div>
            </nav>
            
            <section id='searchBarSection'>
                <Searchbar />
            </section>

            <section id='contactChatContainer'>
                {/* <ContactCard name="Avyukth" image="https://wallpapercave.com/wp/wp4515545.jpg"/> */}
                {
                    ContactData.map((contact,index)=>
                    (
                        <ContactCard key={index+1} image={contact['Contact Image']} name={contact['Contact Name']} />
                    ))
                }
            </section>

            
        </main>
    </>
  )
}
