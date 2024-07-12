import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container py-5">
      <h1 className="text-center display-5 fw-bold">Welcome to the Home Page</h1>
      <p className="text-center">
        This is the home page of the application. You can navigate to other pages using the navbar.
      </p>
    </div>
  );
}

export default Home;