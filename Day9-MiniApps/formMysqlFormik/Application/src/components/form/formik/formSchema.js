import * as Yup from "yup";


export const formSchema = Yup.object({
    name: Yup.string().min(4).max(35).required("Name is required"),
    age: Yup.number().min(1).max(110).required("Age is required"),
    gender: Yup.string().min(4).max(6).required("Gender is required"),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),

    email: Yup.string().min(10).max(50).required("Email is required"),
    city: Yup.string().min(3).max(50).required("City name is required"),
    state: Yup.string().min(3).max(40).required("State name is required"),
    country: Yup.string().min(3).max(40).required("Country name is required"),
    address: Yup.string().min(20).max(100).required("Address is required")
})


