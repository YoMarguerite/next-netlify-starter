import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact FioFio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fio fio" />
        <Nav active="Contact"/>
        <p className="description">
          Contact
        </p>
      </main>

      <Footer />
    </div>
  )
}
