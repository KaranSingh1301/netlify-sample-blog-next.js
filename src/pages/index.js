import Head from 'next/head'

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Progarten sample blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
       <h1>Blog.</h1>
    </div>
  )
}
