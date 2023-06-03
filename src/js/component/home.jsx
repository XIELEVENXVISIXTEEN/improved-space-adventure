import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import screenshotImage from "../../img/Screenshot 2023-05-31 8.06.11 PM.png"
//create your first component
const Home = () => {
	return (

		
	<div className="appNav">
      <nav className="navbar navbar-expand-lg bg-dark navbar-font-color-white" data-bs-theme="light">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Start Bootstrap</button>
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
           <h1 className="welcomeMobile">A Warm Welcome!</h1>
			       <p>Lorem ipsum dolor sit amet conseur adipisicing elit. Animi perferendis corporis rerum quaerat fuga, aliquid ut! Illum voluptas modi dolorum nobis veritatis iusto delectus quam. Tempora, obcaecati. Fugiat, voluptatibus consequatur?</p>
			        <a className="btn btn-primary" href="#">Call to action!</a>
           <div className="Cardxx d-inline col col-1">
             <img src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
             <h5 className="">Card title</h5>
             <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a className="btnY btn btn-primary" href="#">Find Out More!</a>
           </div>
           <div className="Cardyy d-inline col col-1">
            <img className="img-fluid" src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" href="#">Find out More!</a>
           </div>
           <div className="Cardzz d-inline col col-1">
            <img src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" href="#">Find Out More!</a>
           </div>
           <div className="Cardaa d-inline col col-1">
            <img src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" href="#">Find Out More!</a>
            </div>
            </div>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-2 link-light justify-items-end">
               <li className="navbarItem">
                 <a className="nav-link link-light" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="navbarItem">
                 <a className="nav-link link-light" href="#">About</a>
                 </li>
                 <li className="navbarItem">
                 <a className="nav-link link-light" aria-current="page" href="#">Services</a>
                 </li>
                 <li className="navbarItem">
                 <a className="nav-link link-light" href="#">Contact</a>
                 </li>
			         </ul>
			       
			     </nav>
     
		     <div className="appBody">
           <h1 className="">A Warm Welcome!</h1>
			     <p>Lorem ipsum dolor sit amet conseur adipisicing elit. Animi perferendis corporis rerum quaerat fuga, aliquid ut! Illum voluptas modi dolorum nobis veritatis iusto delectus quam. Tempora, obcaecati. Fugiat, voluptatibus consequatur?</p>
			     <a className="btn btn-primary" href="#">Call to action!</a>
         </div>
          <div className="Cardx d-inline-block row col-3">
            <img src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
             <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btnY btn btn-primary" href="#">Find Out More!</a>
          </div>
          <div className="Cardy d-inline-block row col-3">
            <img className="img-fluid" src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
             <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" href="#">Find out More!</a>
          </div>
          <div className="Cardz d-inline-block row col-3">
            <img src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
             <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" href="#">Find Out More!</a>
          </div>
          <div className="Carda d-inline-block row col-3">
            <img src="Screenshot 2023-05-31 8.06.11 PM.png" href="#"></img>
            <h5 className="">Card title</h5>
             <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" href="#">Find Out More!</a>
          </div>
            <nav className="appFooter navbar navbar-expand-lg bg-dark navbar-font-color-white align-text-center" data-bs-theme="light">
             <p className="appFooter-text">Copywrite c Your Website 2019</p>
            </nav>
            </div>
      
      
    
      
		
	);
};

export default Home;
