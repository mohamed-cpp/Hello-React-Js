import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required('required').min(3, 'min').max(10, 'max'),
  email: yup.string().required('required').email('email'),
  date: yup.string().required('required'),
  is_admin: yup.string().required('required')
});

const AddUser = ({user, deleteUser, toggleAdmin}) => {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input {...register("name")} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane" />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name?.message}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input {...register("email")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="john@doe.come" />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email?.message}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            date
          </label>
          <input {...register("date")} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="date" type="date" />
          {errors.date && <p className="text-red-500 text-xs italic">{errors.date?.message}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="is_admin">
          Is Admin
        </label>
        <div className="relative">
          <select {...register("is_admin")} defaultValue={''} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="is_admin">
            <option value="" disabled>Select</option>
            <option value="true">Admin</option>
            <option value="false">User</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
          {errors.is_admin && <p className="text-red-500 text-xs italic">{errors.is_admin?.message}</p>}
        </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-5">
        <button className="items-center shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          Add User
        </button>
    </div>
    </form>
  )
}

export default AddUser
