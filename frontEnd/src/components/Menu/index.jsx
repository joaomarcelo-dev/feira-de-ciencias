import OptionMenu from '../OptionMenu';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

import { FiSettings, FiServer, FiHome } from 'react-icons/fi';


const options = [
  {
    icon: FiHome,
    text: "Pagina Inicial",
    link: "/",
    iconSize: 35
  },
  {
    icon: FiSettings,
    text: "Configurações Gerais",
    link: "#",
    iconSize: 35
  },
  {
    icon: FiServer,
    text: "Configurações do Servidor",
    link: "/settings/server",
    iconSize: 35
  }
]

function Menu({ active }) {

  const { pathname } = useLocation();

  return (
    <div className={`content-menu ${active ? 'active' : 'inactive'} `}>
      {
        options.map((option, index) => (
          <OptionMenu
            key={ index }
            icon={ option.icon }
            text={ option.text }
            link={ option.link }
            iconSize={ option.iconSize }
            isLocation={ pathname === option.link }
          />
        ))
      }
    </div>
  )
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default Menu;
