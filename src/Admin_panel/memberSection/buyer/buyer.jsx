import React, { useState,useEffect } from 'react';
import "./buyer.scss";
import instance from '../../../config/axiosConfig';

export default function Buyer() {

  const [buyerData, setBuyerData] = useState ([]);
  const [buyerArr, setBuyerArr] = useState ();
  const [searchBuyerData, setSearchBuyerData] = useState("");

  useState(()=>{
    instance.get("/api/member")
    .then(res => {
      if(res.data !== "No data found"){
        setBuyerData(res.data)
      }
      else console.log("No data found");
    }).catch(err => console.log(err))
  },[searchBuyerData])


  useEffect(() => {
    // eslint-disable-next-line
    let buyerArr =  buyerData.map ((data, key)=>{
      if((data.user_name.toLowerCase().includes(searchBuyerData.toLowerCase())) || data.member_id.toString().includes(searchBuyerData)){
        return(
          <div className='data-section' key={key}> 
          <div className='body-user-id'>{data.member_id}</div>
          <div className='body-name'>{data.user_name}</div>
          <div className='body-district-name'>{data.district_id}</div>
          <div className='body-mobile'>{data.mobile}</div>
          <div className='body-isSeller'>Yes</div>
          {/* <div className='body-status'>Activated</div>
          <div className='body-activatetion'>
              <div className='activate'>Activate</div>
              <div className='deactivate'>Deactivate</div>
          </div> */}
      </div>
        )
      }
    })

    setBuyerArr(buyerArr)
    // eslint-disable-next-line
  }, [buyerData,searchBuyerData])

  return (
    <div className='main-buyer-fram'>
    <div className='fram-header'>
        <p>Buyer</p>
    </div>

    <div className='filter'>
        <label><input type="checkbox" />Activate</label>
        <label><input type="checkbox" />Deactivate</label>
        <form action="/" method="get" className="form">
            <input className="search" type="text" id="search" placeholder="Search user name..."
            onChange={(e) => setSearchBuyerData(e.target.value)}/>
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
            <div className='user-id'>User ID</div>
            <div className='name'>User Name</div>
            <div className='district-name'>District Name</div>
            <div className='mobile'>Mobile</div>
            <div className='isSeller'>Is seller</div>
            {/* <div className='status'>Status</div>
            <div className='activatetion'>Activate/Deactivate</div> */}
        </div> 

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

        {/* ---------------------------------------table data (repeat section) ----------------------------------- */}    

        {buyerArr}

        </div>
    </div>
    </div>
  )
}
