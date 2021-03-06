import { useState } from "react";
import { omit } from "lodash";

const FormValidate = (callback) => {
  const [formData, setFormData] = useState({});
  //ERRORS
  const [errors, setErrors] = useState({});

  const validate = (e, name, value) => {
    switch (name) {
      case "email":
        if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(value)) {
          setErrors({
            ...errors,
            email: "enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

      case "confirmPassword":
        if (e.target.value !== formData.password) {
          setErrors({
            ...errors,
            Cpassword: "password doesn't match",
          });
        } else {
          let newObj = omit(errors, "Cpassword");
          setErrors(newObj);
        }
        break;
      case "name":
        if (value.length <= 4) {
          // we will set the error state
          setErrors({
            ...errors,
            name: "name atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "name");
          setErrors(newObj);
        }
        break;
      case "phNumber":
        if (
          !new RegExp(
            /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
          ).test(value)
        ) {
          // we will set the error state
          setErrors({
            ...errors,
            phNumber: "Enter vaild number",
          });
        } else {
          let newObj = omit(errors, "phNumber");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      let name = e.target.name;
      let val = e.target.value;

      validate(e, name, val);
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(formData).length !== 0
    ) {
      //calling after validation
      callback();
    } else {
      alert("Please enter all details");
    }
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    errors,
  };
};

export default FormValidate;
