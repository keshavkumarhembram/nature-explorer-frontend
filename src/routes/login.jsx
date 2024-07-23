import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

import Input from '../components/auth/Input';
import { useCookies } from 'react-cookie';

 const validate = values => {
    const errors = {};
      
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.password) {
        errors.password = "Required"
    }
  
    return errors;
  };

function Login() {
    const [cookies, setCookies] = useCookies([]);

    async function login() {
        const response = await axios.post(`/api/v1/users/login`, {
            email:formik.values.email,
            password: formik.values.password
        }, 
        // {
        //     withCredentials: true,
        // }
      )
        console.log(response.data.token);
        setCookies('jwt', response.data.token, {
            path: '/',
        });
    }


    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: login,
      });
      return (
        <main className=' sm:min-h-[100vh] bg-gray-200 flex items-center justify-center'>
          <div className='w-[90%] sm:w-[500px] my-[100px] sm:my-0 bg-white p-8 shadow-xl'>
          <h1 className='uppercase text-3xl font-semibold bg-gradient-to-r from-[#7dd56f] to-[#28b487] bg-clip-text text-transparent mb-8'>Log into your account</h1>
          <form onSubmit={formik.handleSubmit}>
            <Input name='email' formik={formik} label="Email Address" />
            <Input name='password' formik={formik} label="Password" />
            <button className='uppercase text-lg bg-green-400 hover:bg-green-500 hover:shadow-md ease-in-out text-white px-8 py-2 rounded-full' type="submit">login</button>
          </form>
          </div>
        </main>
      );
}

export default Login