
import "../../styles/card.css";
import jsImage from "../../img/js.png";
import htmlImage from "../../img/html.png";
import cssImage from "../../img/css.png";
import javaImage from "../../img/java.png";




const Card = () => {
  return (

    // <!-- ESTO SON LAS IMAGENES -->
 <div className="text-center row ">
				<div className="col-12 col-md-3">
    <article className="card">
      <div>
        <img className="foto" src={jsImage} alt="" />
      </div>
      <h5 className="pt-3">Programacion</h5>
      <p className="text-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis voluptate modi corrupti? Dolor dicta minima culpa fuga facere vel sint, odio voluptate placeat inventore, magni laudantium architecto, nulla quos!</p>
      <div className="content-button">
        <button className="button-image">Find out more!</button>
      </div>
    </article>
				</div>

				<div className="col-12 col-md-3">
    <article className="card">
      <div>
        <img className="foto" src={htmlImage} alt="" />
      </div>
      <h5 className="pt-3">Base de datos</h5>
      <p className="text-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis voluptate modi corrupti? Dolor dicta minima culpa fuga facere vel sint, odio voluptate placeat inventore, magni laudantium architecto, nulla quos!</p>
      <div className="content-button">
        <button className="button-image">Find out more!</button>


      </div>

    </article>
				</div>
				<div className="col-12 col-md-3">
			
    <article className="card">
      <div>
        <img className="foto" src={cssImage} alt="" />
      </div>
      <h5 className="pt-3">JavaScript</h5>
      <p className="text-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis voluptate modi corrupti? Dolor dicta minima culpa fuga facere vel sint, odio voluptate placeat inventore, magni laudantium architecto, nulla quos!</p>
      <div className="content-button">
        <button className="button-image">Find out more!</button>


      </div>

    </article>
				</div>
				<div className="col-12 col-md-3">
			
    <article className="card">
      <div>
        <img className="foto" src={javaImage} alt="" />
      </div>
      <h5 className="pt-3">Java</h5>
      <p className="text-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis voluptate modi corrupti? Dolor dicta minima culpa fuga facere vel sint, odio voluptate placeat inventore, magni laudantium architecto, nulla quos!</p>
      <div className="content-button">
        <button className="button-image">Find out more!</button>


      </div>

    </article>
				</div>
			</div>





  );
}
export default Card;



