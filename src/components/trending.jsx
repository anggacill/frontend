import Dune from'../assets/images/trending/dune.jpg';
import Everything from'../assets/images/trending/everything.jpg';
import Infinite from'../assets/images/trending/infinite.jpg';
import Joker from'../assets/images/trending/joker.jpg';
import Lightyear from'../assets/images/trending/lightyear.jpg';
import Morbius from'../assets/images/trending/morbius.jpg';


function Trending() {
  return (
    <div>
      <div className="container-fluid trending" id='trending'>
        <div className="container p-3 text-light">
            <h3 className='text-center'>Trending</h3>
            <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 ">
                <div className="card bg-secondary text-light" style={{width: '18rem;'}}>
                <img src={Dune} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 "> 
                <div className="card bg-secondary text-light" style={{width: '18rem;'}}>
                <img src={Everything} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>                  
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 ">
                <div className="card bg-secondary text-light" style={{width: '18rem;'}}>
                <img src={Infinite} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 ">
                <div className="card bg-secondary text-light" style={{width: '18rem;'}}>
                <img src={Joker} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 ">
                <div className="card bg-secondary text-light" style={{width: '18rem;'}}>
                <img src={Lightyear} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 ">
                <div className="card bg-secondary text-light" style={{width: '18rem;'}}>
                <img src={Morbius} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
