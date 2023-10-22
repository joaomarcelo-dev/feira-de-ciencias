import './style.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function OptionMenu({ link, icon: Icon, text, iconSize, isLocation, ...rest }) {
  const navigate = useNavigate();

  const navigateTo = (link) => {
    if (link !== '#') {
      navigate(link);
    }
  };

  return (
    <a onClick={ () => navigateTo(link) }>
      <div className={`content-option flex-row ${ isLocation ? 'row-select' : '' }`}>
        <h3 className='text-option'>{ text }</h3>
        <Icon { ...rest } size={ iconSize } />
      </div>
    </a>
  )
}

OptionMenu.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  iconSize: PropTypes.number,
  isLocation: PropTypes.bool,
}

export default OptionMenu;
