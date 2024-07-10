import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
  return (
    <div className="container py-5 bg-light mt-5">
      <h1 className="text-center display-5 fw-bold">Album example</h1>
      <p className="text-center ">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>    
      <div className="d-flex justify-content-center align-items-center">
        <div className="btn-group m-4">
            <button type="button" className="btn btn-sm btn-outline-secondary me-2 bg-primary text-light">main to action  </button>
            <button type="button" className="btn btn-sm btn-outline-secondary bg-secondary text-light">secondary action</button>
        </div>
      </div>
    </div>
  );
}

export default Content;