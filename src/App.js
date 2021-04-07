import React from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './routes/About/About';
import { Contact } from './routes/Contact/Contact';
import { Projects } from './routes/Projects/Projects';
import { NotFound } from './routes/NotFound/NotFound';
import Footer from './components/Footer/Footer';

const routes = {
  '/': () => <About />,
  '/contact': () => <Contact />,
  '/projects': () => <Projects />,
};
function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="main-box">
      <Navbar />
      <div className="content-wrap">{routeResult || <NotFound />}</div>
      <Footer />
    </div>
  );
}

export default App;
