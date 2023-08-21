import React, {useState} from 'react'
import PropTypes from 'prop-types'
let body = document.body

export default function Header(props) {  
  const [clrMode, setClrMode] = useState({
    webMode: 'lite',
  })
  const [modeTxt, setModTxt] = useState('Dark Mode')
  const modeSwipe = () => {
    if (clrMode.webMode === 'lite') {
      body.classList.add('darkMode');
      setClrMode({ webMode: 'dark' });
      setModTxt('Light Mode');
    } else {
      body.classList.remove('darkMode');
      setClrMode({ webMode: 'lite' });
      setModTxt('Dark Mode');
    }
  };
  
  return (
    <header>
        <div className="container">
            <nav>
                <div className="logoHolder">
                  <a href="/">
                    <img src={require('../logo192.png')} alt="" />
                  </a>
                </div>
                <ul>
                  <li><a href="/">{props.homeLink}</a></li>
                  <li><a href="/">{props.aboutLink}</a></li>
                  <li><a href="/">{props.contactLink}</a></li>
                  <button type="button" className="btn btn-primary" onClick={modeSwipe}>{modeTxt}</button>
                </ul>
            </nav>
        </div>
    </header>
  )
}

Header.propTypes = {
  homeLink:PropTypes.string.isRequired,
  aboutLink:PropTypes.string.isRequired,
  contactLink:PropTypes.string.isRequired
}
Header.defaultProps  = {
  homeLink: 'set home link',
  aboutLink: 'set about link',
  contactLink: 'set contact link'
}