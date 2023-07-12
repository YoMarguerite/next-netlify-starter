import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Graphics() {
  return (
    <div className="container">
      <Head>
        <title>Graphics FioFio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fio fio" />
        <Nav active="Graphics"/>
        <p className="description">
        Graphics
        </p>
      </main>

      <Footer />
    </div>
  )
}
