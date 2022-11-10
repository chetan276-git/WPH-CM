import Head from 'next/head';
import Header from './common/Header';
import Footer from './common/Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='shortcut icon' href='/images/logo_cropped.png' />
        <link rel='apple-touch-icon' href='/images/logo_cropped.png' />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/images/logo_cropped.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/images/logo_cropped.png'
        />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
