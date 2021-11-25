
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });
  const [userSignUp, setUserSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [forgetPass, setforgetPass] = useState({
    password: '',
  });

  const [passwordReset, setpasswordReset] = useState({
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleClick = () => {
    setErrors(validate(userLogin));
    setErrors(validate(userSignUp))
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
    setUserSignUp({ ...userSignUp, [event.target.name]: event.target.value });
    setforgetPass({ ...forgetPass, [event.target.name]: event.target.value })
  };

  return {
    handleChange,
    handleClick,
    passwordReset,
    setpasswordReset,
    forgetPass,
    setforgetPass,
    userLogin,
    setUserLogin,
    userSignUp,
    setUserSignUp,
    errors,
  }
};

export default useForm;