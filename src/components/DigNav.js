import { Link } from 'react-router-dom';
import logoimage from '../img/imagelogo.jpg'




const DigiNav = () => {
    return (
        <>

        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top" style={{backgroundColor: 'darkblue'}}>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
           
                <Link to="/" className="nav-link">            
            
            <img src={logoimage} width="20%" height="15%"  alt="img"/>
                </Link>
           


        <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link"> <span className="fa fa-home fa-lg"></span> Home  </Link>
                    
                    </li>
                    <li className="nav-item active">
                        <Link to="/aboutus" className="nav-link"> <span className="fa fa-list fa-lg"></span> AboutUs  </Link>
                    
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to='/products'>  <span className="fa fa-info fa-lg"></span>
                            Products
                            </Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contactus'>  <span className="fa fa-address-card fa-lg"></span>
                            Contact Us </Link>
            
                    </li>
                </ul>    
                <ul className="nav navbar-nav ms-auto">
                    <li className="nav-item dropdown">

    
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</a>
                        <div className="dropdown-menu dropdown-menu-end">
                        

                            <a href="#" className="dropdown-item">SignUp</a>
                            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" 
                            data-bs-target="#modalId">
                                Login
                                </button>
                            
                            </div>

                <div className="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" 
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="mb-3">
                                <label for="" className="form-label">Username</label>
                                <input type="text" name="" id="" className="form-control" placeholder="Username" 
                                aria-describedby="helpId"/>
                                </div>
                                <div className="mb-3">
                                <label for="" className="form-label">Password</label>
                                <input type="password" className="form-control" name="" id="" placeholder="Password"/>
                                </div>
                                </form>
                        </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
</li>
                </ul>

            </div>
        </nav>

        </div>
        </>
    
    );
}

export default DigiNav;