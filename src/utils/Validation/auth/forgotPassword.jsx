import * as Yup from "yup";



//signing in schema
export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });