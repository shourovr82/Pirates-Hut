import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { RiLoginCircleFill } from 'react-icons/ri';
import { AuthContext } from '../../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();



  const navigate = useNavigate();


  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate('/')
        toast.success(`Hi ${user?.displayName}, Welcome to our website !`)

      })
      .catch(e => console.log(e))
  }





  return (
    <div className='login-banner-login'>
      <br />
      <br />
      <br />
      <br />
      <div className='grid  w-11/12 mx-auto md:grid-cols-2 justify-center items-center'>

        {/*  form */}
        <div className='login-side-image hidden md:block'>

        </div>

        <div className=''>
          <h1 className='text-3xl text-center text-white uppercase font-bold'>You have to login first...</h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className=' mt-16 bg-[#01254728] p-10 rounded-lg'>


            <div className='w-3/4  mx-auto flex flex-col gap-10 '>


              <input
                {...register("email")}
                type="email" placeholder='Type Your Email' className='py-2 px-4 rounded-md bg-[#103f6b25]  border-spacing-3 border-b  input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' />

              <input
                {...register("password")}
                type="password" placeholder='Type Your Password' className='py-2 px-4 rounded-md bg-[#103f6b25]   border-spacing-3 border-b   input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' />

              {/*  submit */}
              <div >
                <div className='flex items-center justify-between gap-3'>
                  <button type="submit" className="  py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-500 to-[#14147c2a] border-0 px-10 hover:from-green-500 button-shadow button-color hover:to-[#2d419c60]">
                    Login
                  </button>
                  <p className='text-slate-400'>Forget Your Possword ? </p>
                </div>
                <p className='text-slate-400 flex gap-3 ml-2 mt-4 '>New Here ? <Link to='/signup' className='text-blue-500 flex items-center gap-2'>create an Account <RiLoginCircleFill className='text-2xl ' />  </Link></p>s
              </div>


            </div>


          </form>


        </div>
      </div>

    </div>
  );
};

export default Login;