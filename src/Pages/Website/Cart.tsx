import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>  <div className="flex flex-col m-10">
                    <h4>Cart</h4>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
             </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Img
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total price
              </th>
              </tr>
              
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
              <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900"></div>
            </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src="" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900"></div>

                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    XL
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button data-id="${item.id}" className="btn btn-increase">+</button>
                <button data-id="${item.id}" className="btn btn-decrease">-</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                </td>
                <td>
                
                
            </td>
            <td>
                <button data-id="${item.id}" className="btn btn-remove">Xóa</button>
            </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
         </div>
         <Link to={``} className='no-underline'>
          <button type="submit" className="mt-10  bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline ">Buy now</button>
          </Link>
        </div>
  )
}

export default Cart