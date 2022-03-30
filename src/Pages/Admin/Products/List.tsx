import React from 'react'

type Props = {}

const List = (props: Props) => {
  return (
    <div>        <div className="min-h-full">
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                </div>
                <div className="mt-9 mx-auto flex lg:mt-0 lg:ml-4">
                <a href="/admin/products/add" className="sm:ml-3">
                    <button type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Thêm mới Sản Phẩm
                    </button>
                </a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        
            <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            
            <div className="-my-0 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
          
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                </div>
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ảnh Sản Phẩm
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tên Sản Phẩm
                    </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Giá
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Chi Tiết Sản Phẩm
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Xóa
                     </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                 
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
          
                            <img className="h-10 w-10 rounded-full" src="" alt=""/>
          
                          </div>
                          </div>
                        <div/>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
          
                      <div className="text-sm text-gray-900"></div>
          
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                     
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/admin/products/${products.id}/edit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline">sửa</a>
                      </td>                              
               
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button  className="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Xóa</button>
                      </td>
                    </tr>
               
          
       
                
                  </tbody>
                </table>
              </div>
            </div>
          </div>
            
            </div>
            </div>
        </div>
    </main>
</div></div>
  )
}

export default List