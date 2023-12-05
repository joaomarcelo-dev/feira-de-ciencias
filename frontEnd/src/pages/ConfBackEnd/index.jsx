import Header from "../../components/Header";

import './style.css'

function ConfBackEnd() {
  return (
    <>
    <Header />
      <div className="content-settings-server flex-row">

        <section className="content-infos">
          <div className="card-information">
            <h4 className="text-card-info">Numero de clientes:</h4>

            <h3 className="information-details">Online: {2}</h3>
          </div>

        </section>
      </div>
    </>
  )
}

export default ConfBackEnd;
