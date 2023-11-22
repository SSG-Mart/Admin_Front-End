import React, { useState } from 'react';
import "./buyer.scss";
import instance from '../../../config/axiosConfig';

export default function Buyer() {

  const [allMember, setAllMember] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useState(() => {
    instance.get('/api/member')
      .then(res => {
        setAllMember(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);


  const filteredSellers = allMember.filter(member =>
    member.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.member_id.toString().includes(searchTerm)
  );

  return (
    <div className='main-buyer-fram'>
      <div className='fram-header'>
        <p>Buyer</p>
      </div>

      <div className='filter'>
        {/* <label><input type="checkbox" />Activate</label>
        <label><input type="checkbox" />Deactivate</label> */}
        <label><input type="checkbox" />List All Sellers</label>
        <form action="/" method="get" className="form">
          <input className="search" type="text" id="search" placeholder="Search user name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>{" "}
        {/* end search class */}
        {/* <div>
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div> */}
      </div>
      <div className='table-fram'> {/* ---------------------------------------table fram----------------------------------- */}
        <div className='table-header'> {/* ---------------------------------------table header----------------------------------- */}
          <div className='name'>Member ID</div>
          <div className='item-catagory'>User Name</div>
          <div className='mobile'>Mobile</div>
          <div className='isSeller'>Is seller</div>
          {/* <div className='activatetion'>Activate/Deactivate</div> */}
        </div>

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

          {/* ---------------------------------------table data (repeat section) ----------------------------------- */}
          {filteredSellers.map((member, index) => (
            <div className='data-section' key={index}>
              <div className='body-name'>{member.member_id}</div>
              <div className='body-item-catagory'>{member.user_name}</div>
              <div className='body-mobile'>{member.mobile}</div>
              <div className='body-isSeller'>{member.isSeller ? 'Yes' : 'No'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
