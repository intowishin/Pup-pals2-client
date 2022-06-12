import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import  axios from "axios";
import UserContext from '../contexts/UserContext';



export default function Signup({ authenticate }) {
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setFormData({ ...formData, [name]: value });
  }

  const submitFormData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5005/signup`,
        formData
      );
      setUser(() => data);
      navigate("/user");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitFormData} className="auth__form">
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}