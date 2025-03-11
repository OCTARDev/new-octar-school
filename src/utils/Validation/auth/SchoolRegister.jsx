import * as yup from "yup";

const SchoolRegisterSchema = yup.object().shape({


  first_name: yup
    .string()
    .required("First Name is required")
    .min(3, "Name must be at least 3 characters"),

  last_name: yup
    .string()
    .required("Last Name is required")
    .min(3, "Name must be at least 3 characters"),

  school_name: yup
    .string()
    .required("School name is required")
    .min(3, "School Name must be at least 3 characters"),

  country_code: yup
    .string()
    .required("Country code is required")
    .matches(/^\d+$/, "Country code must contain only numbers"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits"),

  country: yup
    .string()
    .required("Country is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
    
  password: yup
  .string()
  .min(8, "Must be at least 8 characters")
  .matches(/[A-Z]/, "Must contain at least one uppercase letter")
  .matches(/[a-z]/, "Must contain at least one lowercase letter")
  .matches(/[0-9]/, "Must contain at least one numeric digit")
  .matches(/[@$!%*?&]/, "Must contain at least one special character (e.g., @#$...)")
  .required("Password is required"),

  c_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export default SchoolRegisterSchema;
