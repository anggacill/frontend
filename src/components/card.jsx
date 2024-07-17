import reactLogo from '../assets/react.svg'

function Card(){
    return(
     <>
        <div className="d-flex flex-row  ">
        <div class="card my-5 me-3" style={{width: '18rem'}}>
        <img src={reactLogo} className="logo react p-3" alt="React logo" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="row">
                    <div className="col-8">
                    <button type="button" class="btn btn-outline-dark">View</button>
                    <button type="button" class="btn btn-outline-dark">Edit</button>
                    </div>
                    <div className="col-4"><p>9 Mins</p></div>
                </div>
            </div>
        </div>
        <div class="card my-5 me-3" style={{width: '18rem'}}>
        <img src={reactLogo} className="logo react p-3" alt="React logo" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="row">
                    <div className="col-8">
                    <button type="button" class="btn btn-outline-dark">View</button>
                    <button type="button" class="btn btn-outline-dark">Edit</button>
                    </div>
                    <div className="col-4"><p>9 Mins</p></div>
                </div>
            </div>
        </div>
        <div class="card my-5 me-3" style={{width: '18rem'}}>
        <img src={reactLogo} className="logo react p-3" alt="React logo" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="row">
                    <div className="col-8">
                    <button type="button" class="btn btn-outline-dark">View</button>
                    <button type="button" class="btn btn-outline-dark">Edit</button>
                    </div>
                    <div className="col-4"><p>9 Mins</p></div>
                </div>
            </div>
        </div>
        </div>
     </>
    );
 };
 
 export default Card;