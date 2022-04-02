import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType  } from '../../../types/products';
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../../../api/products';
type EditProps = {
  onUpdate: (product: ProductType) => void
}
type FormInputs = {
    _id?: number,
    category: string,
    name: string,
    img: string,
    price: number,
    detail: string
}

const Edit = (props: EditProps) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    useEffect(() => {
      const getProducts = async () => {
        const {data} = await read(id);
        reset(id);
      }
      getProducts();
    }, []);
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        // navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                 <span>category</span>
                <input type="text" {...register('category', { required: true })} /><hr />
                <span>Name</span>
                <input type="text" {...register('name', { required: true })} /><hr />
                <span>Img</span>
                <input type="text" {...register('img', { required: true })} /><hr />
                <span>Price</span>
                <input type="number" {...register('price', { required: true })} /><hr />
                <span>Detail</span>
                <input type="text" {...register('detail', { required: true })} /><hr />
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Add
                </button>

            </form>
            {/* <div className="min-h-full">
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl mx-auto font-bold text-gray-900">
                Thêm mới tin tức
            </h1>
        </div>
    </header>
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <form action="#" method="POST" id="form-add-products">
                <div className="shadow overflow-hidden sm:rounded-md">
                 
                    <div className="col-span-6 sm:col-span-3">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                           Tên Sản Phẩm
                        </span>
                        <input type="text" id="name" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeHolder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                       Hình Ảnh
                    </span>
                    <input type="file" id="img" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeHolder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    <img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/>
                </div>
                    <div className="col-span-6 sm:col-span-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                   Giá
                    </span>
                    <input type="number" id="priceSp" name="priceSp" className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeHolder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Chi Tiết Sản Phẩm
                </span>
                <textarea id="detailSp" name="detailSp"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"></textarea>
            </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm Sản Phẩm                       </button>
                    </div>
                </div>  
                </form>
                </div>
            </div>
        </div>
    </main>
</div> */}
        </div>
    )
}

export default Edit