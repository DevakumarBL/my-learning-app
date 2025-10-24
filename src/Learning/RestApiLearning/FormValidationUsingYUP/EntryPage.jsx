import { Formik } from "formik";
import { Form } from "./Form";
import * as Yup from "yup";
import axios from "axios";

export  default function EntryPage() {
  return (
    <div>
      <h1> Formik - Example </h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is Required")
            .email("This is not valid Email format"),

          password: Yup.string()
            .required("Password is Required")
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,16}$/,
              "EX-Abcd@1 or Enter one Caps(X) one number on(1) one Special Char(@or$) atleat 6-16 Characters."
            ),

          passwordConfirmation: Yup.string()
            .required("Password is Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
        })}
        onSubmit={async (values) => {
          const payload = {
            email: values.email,
            password: values.password,
          };

          const header = {
            "x-api-key": "reqres-free-v1",
          };

          if (values) {
            const response = await axios.post(
              "https://reqres.in/api/login",
              payload,
              { headers: header }
            );
            console.log("response=====>", response.data);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
             values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </Formik>
    </div>
  );
}
