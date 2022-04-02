import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom'
type Props = {}
type FormInputs = {
  name: string,
  phonenumber: number,
  address: string,
  email: string,
  password: number
}
const Signup = (props: Props) => {
  const {register, handleSubmit, formState} = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = data => {
    navigate('/signin');
    console.log(data);
    signup(data);
  }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <span>Name</span>
      <input type="text" {...register('name', {required: true})} /><hr/>
      <span>phonenumber</span>
      <input type="number" {...register('phonenumber', {required: true})} /><hr/>
      <span>address</span>
      <input type="text" {...register('address', {required: true})} /><hr/>
      <span>email</span>
      <input type="text" {...register('email', {required: true})} /><hr/>
      <span>password</span>
      <input type="password" {...register('password', {required: true})} /><hr/>
      <button>Đăng Ký</button>
  </form>
    // <div className="mt-5 md:mt-0 md:col-span-2">
    //           <div>
    //       <img className="mx-auto  w-auto" src="https://yome.vn/logo-cac-hang-giay-noi-tieng/imager_34_36862_700.jpg" alt="Workflow"/>
    //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
    //         <p className="mt-2 text-center text-sm text-gray-600">
              
    //           <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"></a>
    //         </p>
    //     </div>
    //   <form action="#" method="POST"/>
    //     <div className="shadow overflow-hidden sm:rounded-md">
    //       <div className="px-4 py-5 bg-white sm:p-6">
    //         <div className="grid grid-cols-6 gap-6">
    //           <div className="col-span-6 sm:col-span-3">
    //             <label  className="block text-sm font-medium text-gray-700">name</label>
    //             <input type="text" name="name" id="name"  autoComplete='name' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    //           </div>
    //           <div className="col-span-6 sm:col-span-3">
    //             <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
    //             <input type="number" name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    //           </div>
    //           <div className="col-span-6 sm:col-span-3">
    //             <label  className="block text-sm font-medium text-gray-700">Address</label>
    //             <input type="text" name="address" id="address" autoComplete="address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    //           </div>
    //           <div className="col-span-6 sm:col-span-4">
    //             <label  className="block text-sm font-medium text-gray-700">Email address</label>
    //             <input type="email" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    //           </div>
    //           <div className="col-span-6 sm:col-span-4">
    //             <label  className="block text-sm font-medium text-gray-700">Password</label>
    //             <input type="password" name="password" id="password" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    //           </div>

    //         </div>
    //       </div>
    //       <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    //         <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
    //       </div>
    //     </div>
    //   <form/>
    // </div>
  )
}

export default Signup