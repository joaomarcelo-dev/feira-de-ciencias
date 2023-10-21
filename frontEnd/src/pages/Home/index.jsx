import { useSelector } from "react-redux";
import Header from "../../components/Header";

import './style.css'
import Footer from "../../components/Footer";

function Home() {
  const { message: { message, messageNoCryp, user: { name } } } = useSelector((state) => state.app);

  return (
    <>
      <Header />
      <main className="content-home">
        <div className="content-info-message">
          <h3 className="title-container-info">Informações sobre ultima mensagem</h3>
          <div className="content-infos flex-row">
            <h2 className="text-info">Menssagem enviada por: { name }</h2>
          </div>
        </div>

        <div className="container-messages flex-row">
          <div className="container-message-cryp container-message">
            <h2 className="title-message">Menssagem criptografada:</h2>

            <div className="content-message">
              <h3 className="text-message">{ message }</h3>
            </div>
          </div>

          <div className="container-message-descryp container-message">
            <h2 className="title-message">Menssagem não criptografada:</h2>

            <div className="content-message">
              <h3 className="text-message">{ messageNoCryp }</h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home;
