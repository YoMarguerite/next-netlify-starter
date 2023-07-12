import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Motion() {
  return (
    <div className="container">
      <Head>
        <title>Motion FioFio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fio fio" />
        <Nav active="Motion"/>
        <p className="description">
          Motion
        </p>
      </main>

      <Footer />
    </div>
  )
}
