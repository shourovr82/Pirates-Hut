import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { TbArrowBearRight } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { AuthContext } from '../../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';


const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [photolink, setPhotoLink] = useState('');
  const { googleLogin, registerNewAccount, updateUserProfile } = useContext(AuthContext);
  const imgbbHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();


  const hostPhoto = (image, formData) => {
    const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`;
    if (image) {
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(imgData => {
          console.log(imgData);
          const photoURL = imgData.data.url;
          setPhotoLink(photoURL)
        })
    }
  }



  const handleSignUp = (data) => {
    const image = data.image[0];
    //  host photo
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      hostPhoto(image, formData);
    }

    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name);
    const userDetails = {
      displayName: name,
      photoURL: photolink
    }

    // register
    registerNewAccount(email, password)
      .then(result => {
        const user = result.user;
        // update user
        updateUserProfile(userDetails)
          .then(result => {
            toast.success('Registration Successfully')
            navigate('/')
          })
          .catch(e => console.log(e))
        console.log(user);
      })
      .catch(e => console.log(e))
  }




  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        toast.success(`Hey ${user.displayName} Welcome to the Website !  `)
        navigate('/')
      })
      .catch(e => console.log(e))
  }



  return (
    <div className='login-banner'>
      <br />
      <br />
      <br />
      <br />
      <div className='grid mt-10 w-11/12 mx-auto md:grid-cols-2 justify-center items-center grid-cols-1'>

        {/*  form */}
        <div className='login-side-image hidden md:block'>
        </div>

        <div className=''>
          <h1 className='text-3xl text-center text-white uppercase font-bold'>Create a New Account</h1>
          {/*  form */}
          <div className='mt-8  bg-[#01254728] py-8 rounded-lg'>





            <form onSubmit={handleSubmit(handleSignUp)} >
              <div className='w-3/4  mx-auto flex flex-col gap-7 '>


                <input
                  {...register("name")}
                  type="text" placeholder=' Full Name' className='py-2 px-4 rounded-md bg-[#103f6b25]  border-spacing-3 border-b  input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' />

                <label className="custom-file-upload py-2 px-4 rounded-md bg-[#103f6b25]  border-spacing-3 border-b  text-slate-400">

                  <input
                    {...register("image")}
                    type="file" id='photo' className='input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' />
                  Upload Photo


                </label>




                <input
                  {...register("email")}
                  type="email" placeholder='Type Your Email' className='py-2 px-4 rounded-md bg-[#103f6b25]  border-spacing-3 border-b  input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' />

                <input
                  {...register("password")}
                  type="password" placeholder='Type Your Password' className='py-2 px-4 rounded-md bg-[#103f6b25]   border-spacing-3 border-b   input:text-white focus:text-white text-slate-400 outline-none focus:border-[#0000000a] focus:bg-[#27526b65] focus:ring-2  focus:ring-green-500/50' />

                <div >
                  <div className='md:flex items-center justify-between gap-3'>
                    <button type="submit" className="  py-2 rounded-full text-white text-lg  bg-gradient-to-r from-green-500 to-[#14147c2a] border-0 px-6 hover:from-green-500 button-shadow button-color hover:to-[#2d419c60]">
                      Sign Up
                    </button>
                    <p className='text-slate-400 flex mt-2 md:mt-0 gap-2 text-sm'>Already Have an Account ? <Link to='/login' className='text-blue-500  flex items-center gap-2'>Login Here <TbArrowBearRight /> </Link></p>
                  </div>

                </div>
              </div>
            </form>

            <div >

              <div className='flex flex-col md:flex-row mt-5 gap-3 justify-evenly items-center'>
                <p className='text-xs text-slate-400 '>or signup with ...</p>
                <button
                  onClick={handleGoogleLogin}
                  className='bg-[#06467027] px-4 text-slate-400 text-sm py-1 border border-[#21a4fc59] rounded-md flex items-center gap-2 '> <FcGoogle /> Continue With Google</button>

                <button className='bg-[#06467027] px-4 text-slate-400 text-sm py-1 border border-[#21a4fc59] rounded-md flex items-center gap-2'> <GoMarkGithub /> Continue With Google</button>
              </div>




            </div>


          </div>


        </div>
      </div >
    </div >
  );
};

export default SignUp;