import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Link from 'next/link';

export default function Cpasloinentrain() {
  return (
    <div className="container">
      <Head>
        <title>Fiona Marguerite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fiona Marguerite" />
        <Nav active="Motion"/>
        
        <div className="container mt-3">
          <h1>#CPASLOINENTRAIN</h1>

          <div className="row  my-3">
            <div className="col d-flex justify-content-center">
              <video width="60%" autoPlay={true} muted loop controls>
                <source src="/fiona_motion/CPASLOINENTRAIN C/A.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>

          <div className="row">
            <div className="col text">
              <h2 className="mt-2">L'appli #CPASLOINENTRAIN</h2>

              <p>
                Envie d'ailleurs ?<br></br>
                L'appli #CPASLOINENTRAIN permet de découvrir le patrimoine d'île-de-France à portée de train.
                <br></br>
                <br></br>
                Client : Transilien SNCF Voyageurs
                <br></br>
                <br></br>
                Contrainte : format carré pour les réseaux sociaux
                <br></br>
                <br></br>
                Rôle : animation et illustration
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img className="img" src="/fiona_motion/CPASLOINENTRAIN C/Capture d’écran 2023-06-12 à 23.57.21.jpg"></img>
            </div>
            <div className="col">
              <img className="img" src="/fiona_motion/CPASLOINENTRAIN C/Capture d’écran 2023-06-12 à 23.57.47.jpg"></img>
            </div>
            <div className="col">
              <img className="img" src="/fiona_motion/CPASLOINENTRAIN C/Capture d’écran 2023-06-12 à 23.58.21.jpg"></img>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
