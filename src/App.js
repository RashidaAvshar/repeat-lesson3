import Header from "./components/Header";
import { Route, Routes } from "react-router-dom"
// ?======pages======
import Home from "./pages/Home";
import Form from "./pages/Form";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
