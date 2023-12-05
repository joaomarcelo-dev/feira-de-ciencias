import { useSelector } from "react-redux";
import Header from "../../components/Header";

import './style.css'
import Footer from "../../components/Footer";
import socket from "../../services/socket";
import NoMessage from "../NoMessage";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";

function Home() {
  const { message: { message, messageNoCryp, user: { name } } } = useSelector((state) => state.app);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleResetApp = () => {
    socket.emit('reset-app');
  };

  return (
    <>
      <Header />

      {
        !message
        ? <NoMessage />
        : <main className="content-home">
            <div>
              <div className="flex-row header-content-home">
                <div />
                <h3 className="title-container-info">Informações sobre ultima mensagem</h3>
                <button onClick={handleResetApp} className="reset-app-button">Resetar APP</button>
              </div>

              <div className="content-infos flex-row">
                <h2 className="text-info">Menssagem enviada por: { name }</h2>
              </div>
            </div>

            <div className="container-messages flex-row">
              <div className="container-message-cryp container-message">
                <h2 className="title-message">Mensagem criptografada:</h2>

                <div className="content-message">
                  <h3 className="text-message">{ message }</h3>
                </div>
              </div>

              <div className="container-message-descryp container-message">
                <h2 className="title-message">Mensagem não criptografada:</h2>

                <div className="flex-row message-no-cripty">
                  <div className="content-message">
                    <h3
                      className={`text-message ${ passwordVisible ? '' : 'text-invisible' }`}
                    >
                      { messageNoCryp }
                    </h3>
                  </div>
                  
                  <button
                    className="button-visible-password"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {
                      passwordVisible
                      ? <AiOutlineEye size={50} onClick={() => setPasswordVisible(true)} />
                      : <AiOutlineEyeInvisible size={50} onClick={() => setPasswordVisible(false)} />
                    }
                  </button>
                </div>
              </div>
            </div>
          </main>

      }
      <Footer />
    </>
  )
}

export default Home;
