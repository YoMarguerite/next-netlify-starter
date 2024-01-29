import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Link from 'next/link';

export default function Bmw() {
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
          <h1>EXPERIENCE CLIENT AWARD 2020 (BMW FRANCE)</h1>

          <div className="row  my-3">
            <div className="col d-flex justify-content-center">
              <video width="60%" autoPlay={true} muted loop controls>
                <source src="/fiona_motion/BMW D/D.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>

          <div className="row">

            <div className="col text">
              <h2 className="mt-2">Experience Client Award 2020 (BMW France)</h2>

              <p>
                Concours national interne BMW : promouvoir et soutenir les initiatives locales innovantes qui visent à améliorer l'expérience client à l'après-vente, la fidélité et le développement du business.
                <br></br>
                <br></br>
                Vidéo réalisée pour le site Pays-de-Loire de BMW visant à expliquer le parcours client avec le déploiement d'une carte de fidélité (carte GOLD).
                <br></br>
                <br></br>
                Client : BMW : Pays-de-Loire
                <br></br>
                <br></br>
                Contrainte : durée max, 1m30
                <br></br>
                <br></br>
                Travail réalisé avec Alix LE BAIL et Marine BROSSEAU<br></br>
                Rôle : graphisme et animation
              </p>
            </div>

          </div>
          <div className="row mt-3">
            <div className="col">
              <img className="img" src="/fiona_motion/BMW D/Capture d’écran 2023-06-13 à 00.03.06.jpg"></img>
            </div>
            <div className="col">
              <img className="img" src="/fiona_motion/BMW D/Capture d’écran 2023-06-13 à 00.03.25.jpg"></img>
            </div>
            <div className="col">
              <img className="img" src="/fiona_motion/BMW D/Capture d’écran 2023-06-13 à 00.04.04.jpg"></img>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
