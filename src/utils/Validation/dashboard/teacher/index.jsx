import * as yup from "yup";


const teacherSchema = yup.object().shape({


    name: yup
        .string()
        .required("First Name is required")
        .min(3, "Name must be at least 3 characters"),

    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email format"),

    class_ids: yup.array()
        .of(yup.mixed()) // You can change this to Yup.number() or Yup.string() depending on the data
        .required('Class IDs are required')
        .min(1, 'At least one class ID is required'),
    
    media: yup.mixed()
        .required('Media is required')
        .test('fileType', 'Only image files are allowed', (value) => {
            return value && value instanceof File && value.type.startsWith('image/');
        }),
        
        
    password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one numeric digit")
    .matches(/[@$!%*?&]/, "Must contain at least one special character (e.g., @#$...)")
    .required("Password is required"),

});

export default teacherSchema;
