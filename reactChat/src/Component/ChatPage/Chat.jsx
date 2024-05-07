import React from 'react'
import '../ChatPage/Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone as Mobile, faVideo as Video, faUserPlus as UserAdd, faSmile as Emojii, faPaperclip as Attach } from '@fortawesome/free-solid-svg-icons'
export default function ChatPage() {
  return (
    <>
        <main id='mainContainer'>
          <nav className='nav-bar'>
            <section id='image-sec'>
              <img src="https://wallpapercave.com/wp/wp12166253.jpg" alt="" id='image'/>
            </section>
            <section id='group-desc'>
              <label id='chat-name'>
                GROUP CHAT
              </label>
              <label id='participants'>
                Mohan, Avyukth, Viyansh
              </label>
            </section>
            <section id='nav-icon-sec'>
              <FontAwesomeIcon icon={Mobile} className='nav-icons'/>
              <FontAwesomeIcon icon={Video} className='nav-icons' />
              <FontAwesomeIcon icon={UserAdd} className='nav-icons' />
            </section>
          </nav>

          <div id='chatContainer'>
            <br />
            <label id='selfMessage'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti adipisci ipsam consectetur velit excepturi aut veritatis illo qui?            </label>
            <label id='clientMessage'>
            Quibusdam quod dignissimos neque recusandae sit molestias aut esse veniam incidunt!
            </label>
            <label id='selfMessage'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti adipisci ipsam consectetur velit excepturi aut veritatis illo qui?            </label>
            <label id='clientMessage'>
            Quibusdam quod dignissimos neque recusandae sit molestias aut esse veniam incidunt!
            </label>
            <label id='selfMessage'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti adipisci ipsam consectetur velit excepturi aut veritatis illo qui?            </label>
            <label id='clientMessage'>
            Quibusdam quod dignissimos neque recusandae sit molestias aut esse veniam incidunt!
            </label>
            <label id='selfMessage'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti adipisci ipsam consectetur velit excepturi aut veritatis illo qui?            </label>
            <label id='clientMessage'>
            Quibusdam quod dignissimos neque recusandae sit molestias aut esse veniam incidunt!
            </label>
            <label id='selfMessage'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti adipisci ipsam consectetur velit excepturi aut veritatis illo qui?            </label>
            <label id='clientMessage'>
            Quibusdam quod dignissimos neque recusandae sit molestias aut esse veniam incidunt!
            </label>
          </div>

          <div id='textFieldSection'>
              <FontAwesomeIcon icon={Emojii} className='textFieldIcon emoji' />
              <FontAwesomeIcon icon={Attach} className='textFieldIcon attach' />
              <input type="text" name="" id="textBox" placeholder='Type a messages....'/>
          </div>
        </main>
    </>
  )
}
