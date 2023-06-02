import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

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
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },

            '.greeting': {
              marginTop: '10rem',
            },

            '.tagline': {
              textAlign: 'center',
              marginBottom: '2rem'
            },

            '.content': {
              display: 'flex',
              flexDirection: 'row',
              maxWidth: '960px',
              gap: '20px',
              flexWrap:'wrap',
              marginBottom: '10rem'
            },

            '.title': {
              fontWeight: 'bold'
            },

            a: {
              textDecoration: 'none'
            }
          }),
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}