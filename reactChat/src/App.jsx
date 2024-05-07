import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Chat from './Component/ChatPage/Chat'
import Side from './Component/SideContact/Side'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Routes>
        <Route path='/home' element = {<Chat />}/>
      </Routes> */}
      <div id='container'>
        <div class="item item1">
          <Side />
        </div>
        <div class="item item2">
          <Chat />
        </div>
        {/* <div class="item item3">3</div> */}
      </div>
    </>
  )
}

export default App
