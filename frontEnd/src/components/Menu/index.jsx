import OptionMenu from '../OptionMenu';
import PropTypes from 'prop-types';
import './style.css';

function Menu({ active }) {
  return (
    <div className={`content-menu ${active ? 'active' : 'inactive'} `}>
      <OptionMenu />
    </div>
  )
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default Menu;
