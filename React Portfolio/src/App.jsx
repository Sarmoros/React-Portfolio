import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Navigation from './components/navigation';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation/>}>
      <Route index element={<AboutMe/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/resume" element={<Resume/>} />
      </Route>
    )
  );

  return (

      <div className="app">
        <Header />

        <RouterProvider router={router}/>

        <Footer />
      </div>
  );
};

export default App;
