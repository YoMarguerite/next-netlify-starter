import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Link from 'next/link';

export default function Pluridisciplinaire() {
  return (
    <div className="container">
      <Head>
        <title>Fiona Marguerite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fiona Marguerite" />
        <Nav active="Motion"/>
        
        <div class="container mt-3">
          <h1>LE CLICHÉ - le design (épisode 1)</h1>

          <div class="row  my-3">
            <div class="col d-flex justify-content-center">
              <video width="60%" autoPlay={true} muted loop controls>
                <source src="/fiona_motion/Pluridisciplinaire/C.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>

          <div class="row">

            <div class="col-3">
            </div>

            <div class="col-6">
              <h2 class="mt-2">Le design</h2>

              <p>
                Pour vous c'est quoi le design ?
                <br></br>
                <br></br>
                L'épisode pilote d'une série qui aurait pour objectif de briser les clichés de chaque métier afin d'aider les lycéens à choisir leur voie.
                <br></br>
                <br></br>
                Client : ARTE
                <br></br>
                <br></br>
                Contrainte : format court et vertical
                <br></br>
                <br></br>
                Travail réalisé avec Marthe AUBINEAU, Alix LE BAIL et Anaëlle REBUFFET.
                Rôle : animation
                <br></br>
                <br></br>
                Voix OFF : Marthe AUBINEAU
              </p>
            </div>

            <div class="col-3">
            </div>

          </div>
          <div class="row mt-3">
            <div class="col">
              <img class="img" src="/fiona_motion/Pluridisciplinaire/Capture d’écran 2023-06-13 à 00.00.50.jpg"></img>
            </div>
            <div class="col">
              <img class="img" src="/fiona_motion/Pluridisciplinaire/Capture d’écran 2023-06-13 à 00.02.05.jpg"></img>
            </div>
            <div class="col">
              <img class="img" src="/fiona_motion/Pluridisciplinaire/Capture d’écran 2023-06-13 à 00.02.28.jpg"></img>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
