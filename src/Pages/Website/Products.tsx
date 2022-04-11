import React,{useEffect, useRef} from 'react'
import { Link,useParams } from 'react-router-dom'
import {useAppDispatch,useAppSelector} from '../../app/hooks'
import {listsProduct,namesProduct,filterProName} from '../../features/product/productSlice'
import {ProductType} from '../../types/products'

const Products = () => {
  const { id } = useParams(null);
  const dispatch =  useAppDispatch();
  const products = useAppSelector((state) => state.products.value)
  const timeClearRef = useRef(null);
  useEffect(() => {
    if (!id) {
        dispatch(listsProduct())
    } else {
        dispatch(filterProName(id))
    }
}, [id]);
  useEffect(() => {
    dispatch(listsProduct());
}, [])
const searchName = (keyword :string) => {
  if (timeClearRef.current) {
      clearTimeout(timeClearRef.current)
  };
  timeClearRef.current = setTimeout(() => {
      dispatch(namesProduct(keyword))
  }, 300)
}
  return (
    <div className='container'>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Products </h1>

        <div className="flex items-center">
          <div className="relative inline-block text-left">
            <div>
              <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                <svg className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="">
                            <label htmlFor="form-search" className="sr-only">Search</label>
                            <div className="relative mb-[30px]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                </div>
                                <input onChange={(e) => searchName(e.target.value)} type="text" id="form-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search name product" />
                            </div>
                        </div>
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
              <div className="py-1" role="none">
              </div>
            </div>
          </div>

          <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View grid</span>
  
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
            <span className="sr-only">Filters</span>

            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pt-6 pb-24">
        <h2 id="products-heading" className="sr-only">Products</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">

          <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
  
              <li>
                <a href="/sanpham">All </a>
              </li>
              <li><a href="/products/${item.id}/cate"></a></li>
            </ul>

            <div className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                  <span className="font-medium text-gray-900"> Color </span>
                  <span className="ml-6 flex items-center">

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
 
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div className="pt-6" id="filter-section-0">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label className="ml-3 text-sm text-gray-600"> White </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> Beige-colored</label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> Blue </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> Brown </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> Violet </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                  <span className="font-medium text-gray-900"> Size</span>
                  <span className="ml-6 flex items-center">

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>

              <div className="pt-6" id="filter-section-2">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> XXl </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> XL </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> L </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> M </label>
                  </div>

                  <div className="flex items-center">
                    <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 text-sm text-gray-600"> S </label>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="lg:col-span-3">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {products?.map((item: ProductType, index) => {
                    return <div key={index}>
                  <Link to={`/productdetail/${item._id}`} >
                <div className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={item.img} alt="Front of men&#039;s Basic Tee in black." className="w-20 h-20  lg:w-full lg:h-full"/>
                  </div>
                  <div className="mt-4 flex justify-between">
                  
                    <div>
                      <h3 className="text-sm text-gray-700 no-underline">
                          <span className='' >{item.name}</span>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.price}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900"></p>
                  </div>
                  
                </div>
                </Link>  
                </div>
               })}
 
              </div>
              
            </div>
            </div>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing
                  <span className="font-medium">1</span>
                  to
                  <span className="font-medium">10</span>
                  of
                  <span className="font-medium">97</span>
                  results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    8
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    9
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    10
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Products