import React from 'react'
import './member.scss'
import Buyers from "./buyer/buyer";
import Seller from "./seller/seller";

export default function member() {
  return (
    <div className='main-member-fram' id='member'>
      <Buyers />
      <Seller />
    </div>
  )
}
