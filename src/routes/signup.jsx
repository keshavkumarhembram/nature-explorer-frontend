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
    if(!values.name) {
        errors.password = "Required"
    }
    if(!values.confirmPassword) {
        errors.password = "Required"
    }
  
    return errors;
  };

function Signup() {
    const [cookies, setCookies] = useCookies([]);

    async function signup() {
      try {
        console.log({
          name:formik.values.name,
          email:formik.values.email,
          password: formik.values.password,
          confirmPassword: formik.values.confirmPassword,
      });
          const response = await axios.post(`/api/v1/users/signup`, {
              name:formik.values.name,
              email:formik.values.email,
              password: formik.values.password,
              confirmPassword: formik.values.confirmPassword,
          },
          //  {
          //     withCredentials: true,
          // }
        )
          setCookies('jwt', response.data.token, {
              path: '/',
          });
      } catch(err) {
        console.log(err);
      }
      
    }


    const formik = useFormik({
        initialValues: {
          name:'',
          email: '',
          password: '',
          confirmPassword: '',
        },
        validate,
        onSubmit: signup,
      });
      return (
        <main className='min-h-[100vh] bg-gray-200 flex items-center justify-center'>
          <div className='w-[90%] sm:w-[500px] my-[100px] bg-white p-8 shadow-xl'>
          <h1 className='uppercase text-3xl font-semibold bg-gradient-to-r from-[#7dd56f] to-[#28b487] bg-clip-text text-transparent mb-8'>Create your account</h1>
          <form onSubmit={formik.handleSubmit}>
            <Input name='name' formik={formik} label="Name" />
            <Input name='email' formik={formik} label="Email Address" />
            <Input name='password' formik={formik} label="Password" />
            <Input name='confirmPassword' formik={formik} label="Confirm Password" />
            <button className='uppercase text-lg bg-green-400 hover:bg-green-500 hover:shadow-md ease-in-out text-white px-8 py-2 rounded-full' type="submit">signup</button>
          </form>
          </div>
        </main>
      );
}

export default Signup