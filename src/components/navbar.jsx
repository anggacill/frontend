function Navbar() {
  return(
<nav className="navbar navbar-expand-lg bg-transparant " data-bs-theme="dark">
 <div className="container text-light">
   <a className="navbar-brand" href="#">Film kita</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse ms-3 " id="navbarNav">
   <ul className="navbar-nav ms-auto">
     <li className="nav-item active">
       <a className="nav-link" href="#trending">Trending </a>
     </li>
     <li className="nav-item active">
       <a className="nav-link" href="#superhero">Hero</a>
     </li>
   </ul>
 </div>
 </div>
</nav>  
);
};

export default Navbar;