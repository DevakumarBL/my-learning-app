import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormPage from './FormPage';
import axios from 'axios';

function LoginForm() {
  // const passwordRegexPattern =
  //   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const [user, setUser] = useState([]); 

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required('Email is Required')
            .email('Ex- abcd123@gmail.com'),
          password: Yup.string()
            .required('Password is Required'),
            // .matches(
            //   passwordRegexPattern,
            //   'Your password should be uppercase, lowercase, symbol, number and [8-16]'
            // ),
          confirmPassword: Yup.string()
            .required('Confirm Password is Required'),
            // .oneOf([Yup.ref('password')], 'Password does not match'),
        })}
        onSubmit={ async (values) => {

          const payload ={
            //eve.holt@reqres.in
            //cityslicka
            //cityslicka
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          }

          const headers ={
            "x-api-key": "reqres-free-v1",
          }

          if(values){
            const response = await axios.post("https://reqres.in/api/login",payload,{headers:headers})
            console.log(response)
          setUser([...user,values]); 
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
          <FormPage
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
        {(user && user.length !==0)?(user.map((value,index)=>{
          const{email,password,confirmPassword}=value;
          return <div key={index}>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <p>ConfirmPassword : {confirmPassword}</p>
            <hr />
          </div>
        })):(<p>no user</p> )}
    </div>
  );
}

export default LoginForm;
