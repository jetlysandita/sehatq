import Head from 'next/head'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Sehatq First Test</title>
        <meta name="description" content="Create single app with react. time to finish is two days" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="Sehatq First Test" />
        <meta property="og:description" content="Create single app with react. time to finish is two days" />
      </Head>
      {children}
    </>
  )
}