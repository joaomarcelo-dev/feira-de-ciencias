import './style.css';
import { BsCheckCircle, BsTrash } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import PropTypes from 'prop-types';

function CardUser({ userName, password, online, activated, deleteUser }) {
  return (
    <div className='content-card-user flex-row'>
      <div>
        <h1 className='text-name-card-user'>
          Usuário: { userName}
        </h1>
        <h1 className='text-name-card-user'>
          Senha: { password }
        </h1>

      </div>

      <div className='content-options-card-user flex-row'>
        <div className='div-info-card-user'>
          <div className='content-text-info-card-user'>
            <h3 className='text-info-card-user'>Online:</h3>
            {
              online
              ? <BsCheckCircle size={ 40 }  color='green' />
              : <AiOutlineClose size={ 40 }  color='red' />
            }
          </div>

          <div className='content-text-info-card-user'>
            <h3 className='text-info-card-user'>Ativado:</h3>
            {
              activated
              ? <BsCheckCircle size={ 40 }  color='green' />
              : <AiOutlineClose size={ 40 }  color='red' />
            }
          </div>

          <div className='content-text-info-card-user'>
            <h3 className='text-info-card-user'>Chat Principal:</h3>
            <input
              className='input-check-user'
              type="checkbox"
              name=""
              id=""
            />
          </div>
        </div>

        <button onClick={deleteUser}>
          <BsTrash size={ 50 }  color='red' />
        </button>

      </div>
    </div>
  )
}

CardUser.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  activated: PropTypes.bool.isRequired,
  deleteUser: PropTypes.func.isRequired,
  // mainChat: PropTypes.bool.isRequired,
}


export default CardUser;
