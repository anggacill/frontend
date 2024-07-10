import Navbar from "./componen/Navbar";
import Content from "./componen/Content";
import Card from "./componen/Card";
import Footer from "./componen/Footer";


function App() {  return (
    <>
    <div className="row">
      <div className="container">
        <Navbar/>
      </div>
    </div>
    <div className="row">
      <div className="container">
        <Content/>
      </div>
    </div>
    <div className="row">
      <div className="container">
        <Card/>
      </div>
    </div>
    <div className="row">
      <div className="container">
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App