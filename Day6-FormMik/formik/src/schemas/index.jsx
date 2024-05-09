import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(25).required("Please enter your name"),
    email: Yup.string().email("Invalid email format").required("Please enter your email"),
    password: Yup.string().min(4, "Password is too short. Must be in range 4-10 characters.").max(10, "Password is too long").required("Please enter your password"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords & Confirm passwords must match"),
});