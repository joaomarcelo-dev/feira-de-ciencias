import { useSelector } from "react-redux";
import Header from "../../components/Header";

import './style.css'

function Home() {
  const { message: { message } } = useSelector((state) => state.app);

  return (
    <>
      <Header />
      <main className="content-home">
        <h1>{ message }</h1>
      </main>
    </>
  )
}

export default Home;
