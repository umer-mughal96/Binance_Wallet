export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
      }else if(values.name == Number(values.name)){
          errors.name = 'Name cannot be a number'
      }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if(!values.confirmPassword){
      errors.confirmPassword = 'Confirm Password is required'
    } else if (values.confirmPassword !== values.password){
      errors.confirmPassword = 'Password does not match'
    }
    return errors;
  };