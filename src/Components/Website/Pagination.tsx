import React from 'react'
import { Pagination } from 'antd';
type Props = {}

const Paginations = (props: Props) => {
  return (
    <div>
        <Pagination defaultCurrent={6} total={500} />
    </div>
  )
}

export default Paginations