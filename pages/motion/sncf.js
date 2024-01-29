import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Link from 'next/link';

export default function Sncf() {
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
          <h1>Bagages oubliés - Transilien SNCF Voyageurs</h1>

          <div className="row  my-3">
            <div className="col d-flex justify-content-center">
              <video width="60%" autoPlay={true} muted loop controls>
                <source src="/fiona_motion/SNCF B/B.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>

          <div className="row">

            <div className="col text">
              <h2 className="mt-2">Bagages oubliés</h2>

              <p>
                Vidéo incitant les voyageurs à adopter les bons réflexes dans les transports en communs afin de limiter le nombre de bagages oubliés qui perturbent la ponctualité du réseau.
                <br></br>
                <br></br>
                Client : Transilien SNCF Voyageurs
                <br></br>
                <br></br>
                Contrainte : vidéo diffusé dans les transports
                <br></br>
                <br></br>
                Rôle : animation et illustration
              </p>
            </div>

          </div>
          <div className="row mt-3">
            <div className="col">
              <img className="img" src="/fiona_motion/SNCF B/Capture d’écran 2023-06-12 à 23.58.49.jpg"></img>
            </div>
            <div className="col">
              <img className="img" src="/fiona_motion/SNCF B/Capture d’écran 2023-06-12 à 23.59.08.jpg"></img>
            </div>
            <div className="col">
              <img className="img" src="/fiona_motion/SNCF B/Capture d’écran 2023-06-12 à 23.59.31.jpg"></img>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
