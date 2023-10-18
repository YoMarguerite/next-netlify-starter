import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import { useRouter } from 'next/router';

export default function Motion() {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Fiona Marguerite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fiona Marguerite" />
        <Nav active="Motion"/>

        <div class="container">
          <div class="row">
            <div class="col">
              <video width="100%" autoPlay={true} muted loop onClick={() => router.push('/motion/cpasloinentrain')}>
                <source src="/fiona_motion/Motion/A.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
            <div class="col">
              <video width="100%" autoPlay={true} muted loop onClick={() => router.push('/motion/sncf')}>
                <source src="/fiona_motion/Motion/B.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
            <div class="col">
              <video width="100%" autoPlay={true} muted loop onClick={() => router.push('/motion/pluridisciplinaire')}>
                <source src="/fiona_motion/Motion/C.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <video width="100%" autoPlay={true} muted loop onClick={() => router.push('/motion/bmw')}>
                <source src="/fiona_motion/Motion/D.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
            <div class="col">
              <video width="100%" autoPlay={true} muted loop onClick={() => router.push('/motion/ane')}>
                <source src="/fiona_motion/Motion/E.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
            <div class="col">
              <video width="100%" autoPlay={true} muted loop>
                <source src="/fiona_motion/Motion/F.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <video width="100%" autoPlay={true} muted loop>
                <source src="/fiona_motion/Motion/G.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
            <div class="col">
              <video width="100%" autoPlay={true} muted loop>
                <source src="/fiona_motion/Motion/H.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
            <div class="col">
              <video width="100%" autoPlay={true} muted loop>
                <source src="/fiona_motion/Motion/I.mp4" type="video/mp4"/>
                Error Message
              </video>
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
