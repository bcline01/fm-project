import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";



const App = () => {
  return <div>
  <section id="Homepage">
    <Navbar/>
  </section>
  <section id='Portfolio'>Parallax</section>
  <section id='Contact'>Services</section>
  <section id="Resume">Parallax</section>
  <section id='About'>Portfolio1</section>
  <section>Portfolio2</section>
  <section>Portfolio3</section>
  <section>Contact</section>
  </div>;
};
export default App;

