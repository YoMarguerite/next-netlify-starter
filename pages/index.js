import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fiona Marguerite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fiona Marguerite" />
        <Nav active="Home"/>

        <div class="container">

          <div class="row my-3">
              <video width="100%" autoPlay={true} muted loop>
                <source src="/fiona_motion/Logo Home/Showreel Fiona Marguerite.mp4" type="video/mp4"/>
                Error Message
            </video>
          </div>

          <div class="row">
            <img class="img" src="fiona_motion/Logo Home/bandeau.jpg"></img>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
