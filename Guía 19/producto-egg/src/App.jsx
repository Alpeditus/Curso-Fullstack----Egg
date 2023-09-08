import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Egg</h1>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
