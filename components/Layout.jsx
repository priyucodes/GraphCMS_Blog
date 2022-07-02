import Head from 'next/head';
import { Header } from './';
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'GraphCMS',
};
