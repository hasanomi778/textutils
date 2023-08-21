import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Header
        homeLink="Home"
        aboutLink="About Us"
        contactLink="Contact Us"
      />
      <TextForm
        txtHeading="Einter Your Text For Change It's Appearance -"
      />
    </>
  );
}

export default App;