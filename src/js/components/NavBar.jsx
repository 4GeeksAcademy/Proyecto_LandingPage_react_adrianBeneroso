 const NavBar = ()=>{


  
    return(

// <!-- ESTO ES EL NAVBAR -->
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <span className="navbar-brand ps-5">Start Boostrap</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item pe-3">
          <a className="nav-link text-white" href="#">Home</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}
export default NavBar;