import React from 'react';
import Navbar from "./components/navbar";
import Intro from "./components/intro"; 
import Trending from "./components/trending";
import Superhiro from "./components/superhiro";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <div className="intro" id='op'>
          <Navbar />
          <Intro />
        </div>

          <Trending />
          <Superhiro />    
          <Footer />
          <a href="#top"className='btn btn-warning p-2 tombol'>go tu top</a>
    </>      
  );
}

export default App;
