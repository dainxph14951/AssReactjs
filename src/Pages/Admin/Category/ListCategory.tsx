import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useEffect, useState } from 'react';
import { CategoryType } from '../../../types/category';
import {getCategorys} from '../../../features/category/categorySlice'
const ListCategory = () => {
  const dispatch = useAppDispatch();
  const categorys = useAppSelector((state) => state.categorys.value)
  useEffect(() => {
    dispatch(getCategorys());
}, [])
  return (
    <div>
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {categorys?.map((item : CategoryType, index) => {
                            return (
                                <tr key={index} className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {item.name}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
    </div>
  )
}

export default ListCategory