import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { RiLoginCircleFill } from 'react-icons/ri';
import { AuthContext } from '../../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import useVerifyToken from '../../../hooks/useVerifyToken';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useVerifyToken(loginUserEmail);
  const navigate = useNavigate();


  const getUserJwtToken = email => {
    console.log(email);
    fetch(`http://localhost:5000/getjwt?email=${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken)
          navigate('/')
        }
      })
  }





  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        getUserJwtToken(user?.email);
        toast.success(`Hi ${user?.displayName}, Welcome to our website !`)
      })
      .catch(e => console.log(e))
  }








  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const googleUser = result.user;
        const newUser = {
          name: googleUser?.displayName,
          email: googleUser?.email,
          photoURL: googleUser?.photoURL,
          accountType: 'Buyer',
        }
        fetch('http://localhost:5000/googlelogin', {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            getUserJwtToken(googleUser?.email)
            navigate('/')
            toast.success(`Hey ${googleUser?.displayName} Welcome to the Website !  `)
          })
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

          <div className='mt-16 bg-[#01254728] p-10 rounded-lg'>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className=' '>


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

            <div className='flex flex-col md:flex-row mt-5 gap-3 justify-evenly items-center'>
              <p className='text-xs text-slate-400 '>or signup with ...</p>
              <button
                onClick={handleGoogleLogin}
                className='bg-[#06467027] px-4 text-slate-400 text-sm py-1 border border-[#21a4fc59] rounded-md flex items-center gap-2 '> <FcGoogle /> Continue With Google</button>

              <button className='bg-[#06467027] px-4 text-slate-400 text-sm py-1 border border-[#21a4fc59] rounded-md flex items-center gap-2'> <GoMarkGithub /> Continue With Github</button>
            </div>
          </div>







        </div>
      </div>

    </div>
  );
};

export default Login;