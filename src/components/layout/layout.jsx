import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
