import { useState } from 'react';
import Menu from '../Menu';
import './style.css'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  }

  return (
    <div className='content-header'>
      <header className='flex-row'>
        <div />
        <a href="/" className='link'>
          <div className='content-title'>
            <h2>1º FEIRA DE CIÊNCIAS</h2>
            <p>C.E Neusa Bastos - Anexo I</p>
          </div>
        </a>

        <button className='button-menu-toggle' onClick={handleMenu}>
          {
            menuActive ? (
              <AiOutlineClose
                size={ 35 }
              />
            ) : (
              <FiMenu
                size={ 35 }
              />
            )
          }
        </button>
      </header>

      <Menu active={menuActive} />
    </div>
  )
}

export default Header;
