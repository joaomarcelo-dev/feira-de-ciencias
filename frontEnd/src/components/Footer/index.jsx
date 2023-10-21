import './style.css';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex-row'>
        <div className="container-icons flex-row">
        <a href="https://github.com/joaomarcelo-dev" target='_blank' rel='noopener noreferrer'>
            <FaGithub size={ 35 } />
          </a>

          <a href="#">
            <FaInstagram size={ 35 } />
          </a>

          <a href="https://www.linkedin.com/in/joaomarcelo-dev/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={ 35 } />
          </a>
        </div>
    </footer>
  )
}

export default Footer;
