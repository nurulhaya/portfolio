import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
// import styles from '@/styles/Home.module.css'
// import styles from 'styles.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/tqm8nwq.css"></link>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'brandon-grotesque, sans serif',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}