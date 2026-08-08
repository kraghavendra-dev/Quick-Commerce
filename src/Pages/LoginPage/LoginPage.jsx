import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        password:""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) =>{
        const { name, value } = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!formData.email || !formData.password){
            setError("Please fill all fields");
            return;
        }
        setFormData({ email: "", password: "" });
        navigate('/', { replace: true });
    };


  return (
    <>
    <Navbar/>
        <section className="min-h-full flex items-center justify-center bg-gray-100 px-4 sm:px-6">
            <div className="w-full max-w-md sm:max-w-md lg:max-w-lg bg-white rounded-xl shadow-xl px-6 py-6 sm:px-12 sm:py-8 my-8">

    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 sm:text-4xl">
      Login
    </h1>

    {error && (
          <p className="bg-red-100 text-red-500 p-3 rounded mb-5">
            {error}
          </p>
    )}

    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        
        <div className='relative'>
            <input
               id="password"
               type={showPassword ? "text" : "password"}
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Enter your password"
               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button type="button" onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 top-3'  >
                {showPassword ? "Hide" : "Show"}
            </button>

        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 cursor-pinter"
          />
          Remember me
        </label>

        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold cursor-pointer hover:bg-blue-700 active:scale-[0.98] transition sm:py-4"
      >
        Login
      </button>

      {/* Sign Up */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to='/signup'>
           <span
               className="font-semibold text-blue-600 hover:underline cursor-pointer"
           >
               Sign Up
          </span>
        
        </Link>
      </p>

    </form>

  </div>
</section>
    
    
    
    </>
  )
}

export default LoginPage