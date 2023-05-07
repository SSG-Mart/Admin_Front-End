import React, { useEffect, useState } from 'react';
import "./seller.scss";
import instance from '../../../config/axiosConfig';

export default function Seller(props) {

  const [sellerData, setSellerData] = useState ([]);
  const [searchSellerData, setSearchSellerData] = useState("")
  const [sellerArr, setSellerArr] = useState ();

  const handleActivate = (seller_id) => {
    instance.post('/api/member/seller/activate', { "seller_id": seller_id })
      .then(res => {
        console.log(res.data);
        // Update seller activation status in sellerData state
        setSellerData(prevData => prevData.map(seller => {
          if (seller.seller_id === seller_id) {
            return { ...seller, is_activated: true };
          } else {
            return seller;
          }
        }));
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handleDeactivate = (seller_id) => {
    instance.post('/api/member/seller/deactivate', { "seller_id": seller_id })
      .then(res => {
        console.log(res.data);
        // Update seller activation status in sellerData state
        setSellerData(prevData => prevData.map(seller => {
          if (seller.seller_id === seller_id) {
            return { ...seller, is_activated: false };
          } else {
            return seller;
          }
        }));
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    instance.get("/api/member/seller")
      .then(res => {
        if (res.data !== "No data found") {
          setSellerData(res.data)
        } else {
          console.log("No data found");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let sellerArr = sellerData.map((data, key) => {
      if ((data.user_name.toLowerCase().includes(searchSellerData.toLowerCase())) || data.seller_id.toString().includes(searchSellerData)) {
        return (
          <div className='data-section' key={key}>
            <div className='body-store-name'>{data.store_name}</div>
            <div className='body-main-catagory'>{data.C_ID}</div>
            <div className='body-district-name'>{data.district_name}</div>
            <div className='body-mobile'>{data.mobile}</div>
            <div className='body-more-deatil'><button>Click here</button> </div>
            <div className='body-status'>{data.is_activated ? 'Activated' : 'Deactivated'}</div>
            <div className='body-activatetion'>
              <button className='activate' onClick={() => handleActivate(data.seller_id)}>Activate</button>
              <button className='deactivate' onClick={() => handleDeactivate(data.seller_id)}>Deactivate</button>
            </div>
          </div>
        )
      }
    })
    setSellerArr(sellerArr)
  }, [sellerData, searchSellerData])


  return (
    <div className='main-seller-fram'>
    <div className='fram-header'>
        <p>Seller</p>
    </div>

    <div className='filter'>
        <label><input type="checkbox" />Activate</label>
        <label><input type="checkbox" />Deactivate</label>
        <form action="/" method="get" className="form">
            <input className="search" type="text" id="search" placeholder="Search user name..."
            onChange={(e) => setSearchSellerData(e.target.value)}/>
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
            <div className='store-name'>Store Name</div>
            <div className='main-catagory'>Main Catagory</div>
            <div className='district-name'>District Name</div>
            <div className='mobile'>Mobile</div>
            <div className='item'>Item</div>
            <div className='status'>Status</div>
            <div className='activatetion'>Activate/Deactivate</div>
        </div> 

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

        {/* ---------------------------------------table data (repeat section) ----------------------------------- */}    

        {sellerArr}

        </div>
    </div>
    </div>
  )
}
