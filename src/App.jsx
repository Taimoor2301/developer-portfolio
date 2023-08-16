import Home from "./components/Home";
import Nav from "./components/Nav";
import GraySec from "./components/GraySec.jsx";
import Footer from "./components/Footer.jsx";
import Welcome from "./components/Welcome";
import { gsap } from "gsap";
function App() {
  const tl = gsap.timeline();
  return (
    <div className="bg-gray-950">
      <Welcome tl={tl} />
      <Nav tl={tl} />
      <Home tl={tl} />
      <GraySec tl={tl} />
      <Footer tl={tl} />
    </div>
  );
}

export default App;
