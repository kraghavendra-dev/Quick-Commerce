import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const SignupPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData ] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });
  
    const [errors, setErrors] = useState({});


    const handleChange = (e) =>{
      const { name, value } = e.target;

      setFormData((prev)=>({
        ...prev,
        [name]: value,
      }));

      setErrors((prev)=>({
        ...prev,
        [name]: "",
      }));

    };



    const validateForm = () => {
      const newErrors = {};

      if(!formData.name.trim()){
        newErrors.name = "Name is required"
      }

      if(!formData.phone.trim()){
        newErrors.phone = "Phone number is required"
      }

      if(!formData.email.trim()){
        newErrors.email = "Email is required"
      }

      if(!formData.password.trim()){
        newErrors.password = "Password is required"
      }

      return newErrors;
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const validationErrors = validateForm();
        console.log('Signup submit', formData, validationErrors);

        if(Object.keys(validationErrors).length > 0){
          setErrors(validationErrors);
          return;
        }

        setErrors({});
        console.log("SignupData:", formData);
        setFormData({ name: "", phone: "", email: "", password: "" });
        navigate('/', { replace: true });
    };




  return (
    <>
    <Navbar/>
    <section className='min-h-full flex items-center justify-center bg-gray-100 px-4 py-6 sm:px-6 sm:py-10'>
        <div className='w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-lg my-4 px-6 py-6 sm:px-10 sm:py-8'>
             <h1 className='text-3xl text-center font-bold text-blue-600 mb-4 sm:text-4xl'>
                Create an account
             </h1> 
             <form onSubmit={handleSubmit}  className='space-y-4 sm:space-y-6'>
                  <div>
                    <label htmlFor='Name' className='block text-md font-medium text-gray-700 mb-1'>
                         Name
                    </label>
                    <input  
                       type="text"
                       name="name"
                       placeholder='Enter your Name'
                       value={formData.name}
                       onChange={handleChange}
                       className={`w-full rounded-lg border border-gray-600 text-sm placeholder-gray-600 py-3 px-4 ${
                        errors.name
                          ? "border-red-200 focus:ring-red-200"
                          : "border-gray-200 focus:ring-blue-200"
                       }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}

                  </div>
                  <div>
                    <label htmlFor='number' className='block text-md font-medium text-gray-700 mb-1'  >
                      Phone Number
                    </label>
                    <input
                       type="tel"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       placeholder='Enter your number'
                       className={`w-full rounded-lg border border-gray-600 text-sm placeholder-gray-600 py-3 px-4 ${
                        errors.phone
                          ? "border-red-200 focus:ring-red-200"
                          : "border-gray-200 focus:ring-blue-200"
                       }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}

                  </div>
                  <div>
                    <label htmlFor='email' className='block text-md font-medium text-gray-700 mb-1'  >
                      Email
                    </label>
                    <input 
                       type="email"
                       name="email"
                       placeholder='Enter your Email'
                       value={formData.email}
                       onChange={handleChange}
                       className={`w-full rounded-lg border border-gray-600 text-sm placeholder-gray-600 py-3 px-4 ${
                        errors.email
                          ? "border-red-200 focus:ring-red-200"
                          : "border-gray-200 focus:ring-blue-200"
                       }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className='block text-md font-medium text-gray-700 mb-1'  >
                      Password
                    </label>
                    <input
                       type="password"
                       name='password'
                       placeholder='Enter your password'
                       value={formData.password}
                       onChange={handleChange}
                       className={`w-full rounded-lg border border-gray-600 text-sm placeholder-gray-600 py-3 px-4 ${
                        errors.password
                          ? "border-red-200 focus:ring-red-200"
                          : "border-gray-200 focus:ring-blue-200"
                       }`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between'>
                      <label className='flex items-center gap-2 text-gray-600'  >
                           <input
                              type="checkbox"
                              className='h-4 w-4 rounded border-gray-600 cursor-pointer'
                           />
                           Remember me
                      </label>
                      <a href="#" className='text-blue-500 hover:text-blue-600 hover:underline'  >
                        Forgot Password?
                      </a>
                  </div>
                  <button type="submit" className='w-full rounded-lg bg-blue-600 py-3 text-white cursor-pointer font-semibold hover:bg-blue-700 transition sm:py-4'>
                    Signup
                  </button>
                  <p className='text-center text-sm text-gray-600 '>
                      Already you have account? {" "}
                      <Link to="/login">
                         <span className='font-semibold text-blue-600 hover:underline cursor-pointer'>
                            Sign In
                          </span>
                      </Link>
                  </p>
             </form>
        </div>
    </section>
    </>
  )
}

export default SignupPage