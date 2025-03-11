import * as yup from "yup";



//signing in schema
export const resetPasswordSchema = yup.object().shape({
      password: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one numeric digit")
      .matches(/[@$!%*?&]/, "Must contain at least one special character (e.g., @#$...)")
      .required("Password is required"),
    
      password_confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
  });