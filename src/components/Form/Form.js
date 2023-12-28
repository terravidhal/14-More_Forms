import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";




const Form = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); // default value of false
  const [Error, setError] = useState({firstname:"", lastname:"", email:"",password:"",passwordConfirm:""});
 // console.log(Object.values(Error));
  
  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();
    // shorthand ES6 syntax for building an object - see notes above
    const newUser = { Firstname, Lastname, email, password, PasswordConfirm }; // ici les clès ont les mêmes noms q ls valeurs
    console.log("Welcome", newUser);
    // clear Form
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");

    // updating state will change the message to be displayed in the form
    setHasBeenSubmitted(true);
  };


  // firstname
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    if (e.target.value.length < 1) {
      setError({ firstname: "firstname is required!" });
    } else if (!/^[a-zA-Z]{2,20}$/i.test(e.target.value)) {
      setError({ firstname: "The firstname must be at least 2 and at most 20 characters" });
    } else {
      setError({ firstname: "" });
    }
  };
  // lastname
  const handleLastname= (e) => {
    setLastname(e.target.value);
    if (e.target.value.length < 1) {
      setError({ lastname: "lastname is required!" });
    } else if (!/^[a-zA-Z]{2,20}$/i.test(e.target.value)) {
      setError({ lastname: "The lastname must be at least 2 and at most 20 characters" });
    } else {
      setError({ lastname: "" });
    }
  };
  // email
  const handleEmail= (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setError({ email: "email is required!" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      setError({ email: "Invalid email address" });
    } else {
      setError({ email: "" });
    }
  };
  //password
  const handlePassword= (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setError({ password: "The password field is required!" });
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(e.target.value)) {
      setError({ password: "Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" });
    }  else {
      setError({ password: "" });
    }
  };
  //confirm password 
  const handleconfirmPassword= (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value.length < 1) {
      setError({ PasswordConfirm: "The password confirm field is required!" });
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(e.target.value)) {
      setError({ passwordConfirm: "password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" });
    } else if (e.target.value !== password) {
      setError({ passwordConfirm: "The password does not match its confirmation" });
    } else {
      setError({ passwordConfirm: "" });
    }
  };

  return (
    
    <div className="Form">
      <form onSubmit={createUser}>
        <h3>
          {hasBeenSubmitted
            ? "Thank you for submitting the form!"
            : "Welcome, please submit the form"}
        </h3>
        <div>
          <label>Firstname: </label>
          <input
            type="text"
            value={Firstname}
            onChange={(e) => handleFirstname(e)}
          />
          {Error.firstname ? <p style={{color:'red'}}>{Error.firstname}</p> : ""}
        </div>
        <div>
          <label>Lastname: </label>
          <input
            type="text"
            value={Lastname}
            onChange={(e) => handleLastname(e)}
          />
          {Error.lastname ? <p style={{color:'red'}}>{Error.lastname}</p> : ""}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
          {Error.email ? <p style={{color:'red'}}>{Error.email}</p> : ""}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          {Error.password ? <p style={{color:'red'}}>{Error.password}</p> : ""}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={PasswordConfirm}
            onChange={(e) => handleconfirmPassword(e)}
          />
          {Error.passwordConfirm ? <p style={{color:'red'}}>{Error.passwordConfirm}</p> : ""}
        </div>
        
        <input type="submit" value="Create User" /> 
      </form>
      <div className="form-data">
        <div className="firstname">Firstname: {Firstname}</div>
        <div className="lasttname">Lastname: {Lastname}</div>
        <div className="email">email: {email}</div>
        <div className="password">password: {password}</div>
        <div className="PasswordConfirm">
          PasswordConfirm: {PasswordConfirm}
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
