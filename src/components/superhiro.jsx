import Antman from'../assets/images/superhero/antman.jpg';
import Avenger from'../assets/images/superhero/avenger.jpg';
import Batman from'../assets/images/superhero/batman.jpg';
import Robinhood from'../assets/images/superhero/robinhood.jpg';
import Spidermen from'../assets/images/superhero/spiderman-cover.jpg';
import Superman from'../assets/images/superhero/superman.jpg';


function Superhiro() {
  return (
    <div>
      <div className="container-fluid superhiro " id='superhiro'>
        <div className="container p-3 text-light">
            <h3 className='text-center'>Superhiro</h3>
            <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="card bg-primary" style={{width: '18rem;'}}>
                <img src={Antman} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4"> 
                <div className="card bg-primary" style={{width: '18rem;'}}>
                <img src={Avenger} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
                </div>                  
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="card bg-primary" style={{width: '18rem;'}}>
                <img src={Batman} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="card bg-primary" style={{width: '18rem;'}}>
                <img src={Robinhood} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="card bg-primary" style={{width: '18rem;'}}>
                <img src={Spidermen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="card bg-primary" style={{width: '18rem;'}}>
                <img src={Superman} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Superhiro;
