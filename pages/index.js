import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({ productList }) {


  return (
    <div>
      <Head>
        <title>Pizzeria</title>
        <meta name="Pizza ordering application" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <ProductList productList={productList} />

    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  }
}