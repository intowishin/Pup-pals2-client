import "../App.css";
import dogimg from "../images/hpdog3.png";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <div className="card content-medium home">
        <div>
          <h2 className="title">PUP-PALS</h2>
          <br />
          <p>
            Sit pit bull bell heel down puppies stand. Dog lap dog leash bite
            maltese peanut butter come puppy dog house. Release peanut butter
            dog tail play dead collar dog. Pomsky bite leash maltese, bulldog
            shih tzu fetch german shephard tail poodle sit. German shephard
            great dance chase tail leash fetch chase tail, chew toy dog bowl
            stand chow chow k9 release. 
            <br />
            <br />
            Stay play dead rottweiler dog bone puppy
            chew toy lap dog, maltese puppy dog bowl lab pug sit rottweiler. Dog
            bone k9 maltese, vet tug husky dog house leap dog bone bulldog dog
            bone. Sit pretty collar poodle shake shih tzu, play dead paw leash
            stay kibbles. Dog poodle paw bulldog fetch bite puppy. Dog toy
            pomsky leash jump bite tennis ball, dog bowl stay english mastiff
            sit.
          </p>
          <br />
            <NavLink className="btn btn-primary" to="/signup">Sign Up!</NavLink>
        </div>
        <div>
          <img src={dogimg} alt="placholder" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
