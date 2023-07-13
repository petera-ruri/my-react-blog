import React from 'react'
import PopupBox from './PopUpBox'

function NavBar() {
    return (
        <>
        <div className='navbar'>
           <h1>Home</h1>
           <h1>About</h1>
           <h1>Contact</h1>
           <h1>Socials</h1>
           <PopupBox />
        </div>
        </>
    )
}

export default NavBar