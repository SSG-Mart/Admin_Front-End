import React, { useState, useEffect } from 'react';
import './report.scss'
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import instance from '../../config/axiosConfig';

export default function Filter() {

  const [allSeller, setallSeller] = useState([]);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    instance.get('api/seller/not-verify')
      .then(res => {
        setallSeller(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [trigger]);

  const handleApprove = (sellerId) => {
    instance.post(`/api/seller/verify/${sellerId}`)
      .then(res => {
        console.log('Seller verified:', res.data);
        setTrigger(p => !p);
      })
      .catch(err => {
        console.log('Error verifying seller:', err.response);
      });
  };

  return (
    <div className='verification-contaier' id='report'>
      <div className='headre-name'>Seller Approval</div>
      <div className='verification-body'>
        <div className='table-fram'> {/* ---------------------------------------table fram----------------------------------- */}
          <div className='table-header'> {/* ---------------------------------------table header----------------------------------- */}
            <div className='number'>Number</div>
            <div className='user-name'>User Name</div>
            <div className='store-name'>Store Name</div>
            <div className='nic'>NIC</div>
            <div className='item-category'>Item Category</div>
            <div className='action'>Action</div>
          </div>

          <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

            {/* ---------------------------------------table data (repeat section) ----------------------------------- */}
            {allSeller.map((sellers, index) => (
              <div className='data-section' key={index}>
                <div className='body-number'>1</div>
                <div className='body-user-name'>{sellers.user_name}</div>
                <div className='body-store-name'>{sellers.store_name}</div>
                <div className='body-nic'>{sellers.nic_number}</div>
                <div className='body-item-category'>{sellers.category_id === 1 ? 'SOLID' : sellers.category_id === 2 ? 'FOOD' : ''}</div>
                <div className='body-action'>
                  <div className='warning'><p style={{ marginRight: '4px' }} onClick={() => handleApprove(sellers.seller_id)} >Approve</p><TiTick /></div>
                  <div className='remove'><p style={{ marginRight: '4px' }} >Reject</p><IoCloseSharp /></div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
