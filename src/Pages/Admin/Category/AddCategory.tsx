import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../../../types/products';
import { useNavigate } from 'react-router-dom'

type AddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    _id?: number,
    name: string,
}

const AddCategory = (props: AddProps) => {
    const { register, handleSubmit, formState } = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onAdd(data);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <span>Name</span>
                <input type="text" {...register('name', { required: true })} /><hr />

                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Add
                </button>

            </form>
        </div>
    )
}

export default AddCategory