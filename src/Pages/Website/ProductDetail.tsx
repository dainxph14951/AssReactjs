import Reactm, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { readProduct } from '../../api/products';
import { ProductType } from '../../types/products'
import { addItem } from '../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readProduct(id);
      setProduct(data);

    }
    getProduct();
  }, []);
  const addItemToCart = () => {
    dispatch(addItem({
      _id: product?._id,
      name: product?.name,
      img: product?.img,
      price: product?.price,

      quantity: quantity
    }));
    navigate("cart");
    // alert("Thêm thành công.")
  }
  return (
    <div>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900"> Productdetail </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900"> ConVerse </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product?.name}</a>
              </li>
            </ol>
          </nav>
          <div>
            <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                <img src={product?.img} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img src={product?.img} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img src={product?.img} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
                </div>
              </div>

            </div>

            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">

              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product?.name}</h1>
              </div>

              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only"></h2>
                <p className="text-3xl text-gray-900">{product?.price}</p>
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">

                      <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>


                      <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>


                      <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>


                      <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>


                      <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                    <span className="mr-3">Quantity</span>
                    <div className="">
                      <input min={1} onChange={(e) => {
                        setQuantity(+e.target.value)
                      }} defaultValue={1} type="number" className="w-[80px] rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-[5px]">
                      </input>
                    </div>
                  </div>
                </div>

                <form className="mt-10">

                  <div>
                    <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a color</legend>
                      <div className="flex items-center space-x-3">

                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                          <p id="color-choice-0-label" className="sr-only">White</p>
                          <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                        </label>


                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                          <p id="color-choice-1-label" className="sr-only">Gray</p>
                          <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                        </label>

                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                          <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                          <p id="color-choice-2-label" className="sr-only">Black</p>
                          <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a size</legend>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                          <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                          <p id="size-choice-0-label">26</p>

                          <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                            <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                              <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                            </svg>
                          </div>
                        </label>


                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                          <p id="size-choice-1-label">27</p>


                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>


                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                          <p id="size-choice-2-label">28</p>

                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>

                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                          <p id="size-choice-3-label">29</p>


                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>


                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                          <p id="size-choice-4-label">30</p>

                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>


                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                          <p id="size-choice-5-label">31</p>

                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>

                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                          <p id="size-choice-6-label">32</p>

                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>


                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                          <p id="size-choice-7-label">33</p>

                          <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <button onClick={() => { addItemToCart() }} type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Add to bag</button>
                  </div>
                </form>
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">

                    <p className="text-base text-gray-900">{product?.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div> //
        </div>
      </div>
    </div>
  )
}

export default ProductDetail