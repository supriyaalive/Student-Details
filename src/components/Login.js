
import { useState } from "react";
import "./Login.css"
import FormInput from "./FormInput";
import { useNavigate} from "react-router-dom"

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
   
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //  UseHistory

  let navigat = useNavigate();

  const fromSbmited = () => {
    const allFieldsFilled = inputs.every(input => values[input.name]);
  
  
    const allInputsValid = inputs.every(input => {
      if (input.pattern) {
        const regex = new RegExp(input.pattern);
        return regex.test(values[input.name]);
      }
      return true;
    });
  
    
    if (allFieldsFilled && allInputsValid) {
      
      navigat("/profile");
    } else {
      
      console.log("Please fill in all required fields and correct any invalid inputs.");
    }
  };
  
    
  

  return (
    <div className="app">


     <div className="box-container"> 
      <div className="container1">
        <form onSubmit={handleSubmit}>
          <h1 className="register">Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="button1"
          
          onClick={fromSbmited}
          >Submit</button>
        </form>
  
       </div>
      </div>
    </div>
  )
}

export default Login
