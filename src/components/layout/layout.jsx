import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

//import { useSelector } from 'react-redux';

const Layout = () => {
  // const state = useSelector((state) => state.root);

  window.addEventListener('unload', () => {
    //localStorage.setItem('test-task-jira', JSON.stringify(state));
  });
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
