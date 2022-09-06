import Banner from './components/banner/Banner';
import NavBar from "./components/Navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Section from './components/Section/Section';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './app.css'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Tech></Tech>
      <Section></Section>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
