import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/componets/Navbar/Navbar";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer></footer>
    </Router>
  );
}

export default App;
