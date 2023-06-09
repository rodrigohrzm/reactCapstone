import { Link } from "react-router-dom"

function CallToAction() {
    return (
      <section class="callToAction"><div>
        <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a familiy owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button><Link to={"/booking"}>Reserve a table</Link></button> 
        </div>
        <div class="spacer"></div>
        <img src={require("./assets/restauranfood.jpg")} />
      </div></section>
    )};

  export default CallToAction;