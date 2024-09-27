
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <About/>
      <hr/>
      <Project/>
      <hr/>
      <Contact/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
