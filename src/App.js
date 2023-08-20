import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header
        homeLink="Home"
        aboutLink="About Us"
        contactLink="Contact Us"
      />
      <Routes>
        {/* home */}
        <Route index element={
          <TextForm
            txtHeading="Einter Your Text For Change It's Appearance -"
          />
        }/>

        {/* about */}
        <Route exact path="/about" element={<About />} />

        {/* contact */}
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;