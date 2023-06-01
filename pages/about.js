import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fio fio" />
        <Nav active="About"/>
        <p className="description">
          about
        </p>
      </main>

      <Footer />
    </div>
  )
}
