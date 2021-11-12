import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Society Yellow Pages</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content='Discover home & local businesses with your co-residents.' />
        <meta property="og:url" content="https://societyyp.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='Society Yellow Pages' />
        <meta property="og:description" content='Discover home & local businesses with your co-residents.' />
        <meta property="og:image" content="https://troice.sgp1.digitaloceanspaces.com/media/assets/web/syp_preview.png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
      </Head>
      <div>
        This is the Nextjs app
      </div>
    </div>
  )
}

