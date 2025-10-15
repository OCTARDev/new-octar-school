import * as Yup from "yup";

export const signinSchema = Yup.object().shape({
  type: Yup.string().required(),

  // Conditionally require fields based on "type"
  email: Yup.string().when("type", {
    is: (type) => type !== "parent",
    then: (schema) => schema.email("Invalid email format").required("Email is required"),
    otherwise: (schema) => schema.strip(), // removes field from validation when not needed
  }),

  password: Yup.string().when("type", {
    is: (type) => type !== "parent",
    then: (schema) =>
      schema.min(8, "Password must be at least 8 characters").required("Password is required"),
    otherwise: (schema) => schema.strip(),
  }),

  parent_code: Yup.string().when("type", {
    is: "parent",
    then: (schema) => schema.required("Code is required"),
    otherwise: (schema) => schema.strip(),
  }),
});
