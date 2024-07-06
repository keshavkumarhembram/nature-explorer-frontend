import React from 'react'

function Input({name, formik, label}) {

  const placeholderValue = (function (name) {
    let placeholder;
    switch (name) {
      case 'email':
          placeholder = 'you@example.com';
          break;
      case 'password':
      case 'confirmPassword':
          placeholder = '••••••••';
          break;
      case 'name':
        placeholder = 'username';
        break;
      default:
          placeholder = '';
    }
    return placeholder;
  })(name);

  return (
    <div className='relative flex flex-row h-24 my-4 justify-center items-end'>
        <label className='absolute top-4 left-0 font-semibold text-gray-500' htmlFor={name}>{label}</label>
          <input
          className='h-12 w-[100%] bg-gray-100 rounded-md px-4'
          placeholder={placeholderValue}
            id={name}
            name={name}
            type={name === 'confirmPassword' ? 'password': name}
            onChange={formik.handleChange}
            value={formik.values[name]}
          />
          {formik.errors[name] ? <div>{formik.errors[name]}</div> : null}
    </div>
  )
}

export default Input