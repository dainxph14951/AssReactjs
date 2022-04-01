import React from 'react'
import HeaderAdmin from '../../Components/Admin/HeaderAdmin';
import Slider from '../../Components/Admin/Slider';
import Contents from '../../Components/Admin/Content';
import FooterAdmin from '../../Components/Admin/FooterAdmin';

import { Outlet } from 'react-router-dom'
import SliderAdmin from '../../Components/Admin/Slider';

type Props = {}

const AdminLayount = (props: Props) => {

  return (
    <div>
      <div className="h-screen flex flex-row flex-wrap">
        <SliderAdmin />
        <div className="bg-gray-100 flex-1">
          <HeaderAdmin />

          <main className='p-[10px]'>
            <Outlet />
          </main>
        </div>
      </div>
    </div >
  )
}

export default AdminLayount