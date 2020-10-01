import { useSelector } from 'react-redux'
import HeaderWithIcon from '../src/components/headerWithIcon'
import { MiniProduct } from '../src/components/product'
import useGuard from '../src/hooks/useGuard'
import Layout from '../src/layout/general'
import Head from 'next/head'

export const config = { amp: 'true' }
export default function Feed() {
  useGuard()
  return (
    <Layout>
      <Head>
        <script async src="https://cdn.ampproject.org/v0.js" />
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </Head>
      <HeaderWithIcon>
        <h1>Feed</h1>
      </HeaderWithIcon>
      <amp-ad
        type="a9"
        data-amzn_assoc_ad_mode="auto"
        data-divid="amzn-assoc-ad-fe746097-f142-4f8d-8dfb-45ec747632e5"
        data-recomtype="async"
        data-adinstanceid="fe746097-f142-4f8d-8dfb-45ec747632e5"
        width="300"
        height="250"
        data-aax_size="300x250"
        data-aax_pubname="test123"
        data-aax_src="302"
      >
      </amp-ad>
    </Layout>
  )
}
