import '/styles/globals.scss'
import React, { useState } from 'react'
import Favicon from "react-favicon";
import NextNprogress from 'nextjs-progressbar';
import dynamic from 'next/dynamic'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Header from '/components/Header/Header';
import Body from '/components/Body/Body';
import Footer from '/components/Footer/Footer';

const firebaseConfig = {
  apiKey: "AIzaSyBathFusRB5OGQayfdF4CEGJecBho4rBCs",
  authDomain: "geodev-portifolio.firebaseapp.com",
  projectId: "geodev-portifolio",
  storageBucket: "geodev-portifolio.appspot.com",
  messagingSenderId: "668620955701",
  appId: "1:668620955701:web:85287964d5620474e3517c",
  measurementId: "G-WJ736W8EYX"
};

const app = initializeApp(firebaseConfig);


const HeaderD = dynamic(() => import('/components/Header/Header'), {
  ssr: false,
})

const BodyD = dynamic(() => import('/components/Body/Body'), {
  ssr: false,
})

const FooterD = dynamic(() => import('/components/Footer/Footer'), {
  ssr: false,
})






function Portifolio() {
  return (
    <>
      <HeaderD />
      <BodyD/>
      <NextNprogress
        color='#8633ca'
        startPosition={0.4}
        stopDelayMs={100}
        height={3}
        showOnShallow
      />
      <title>Geo | Dev </title>
      <Favicon url="/images/favicon.ico"></Favicon>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="theme-color" content="#ffffff"/>
      <FooterD/>
    </>
  )
}

export default Portifolio
