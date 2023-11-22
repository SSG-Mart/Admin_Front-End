import React, { useState } from 'react';
import "./seller.scss";
import instance from '../../../config/axiosConfig';

export default function Seller() {

  const [allSeller, setallSeller] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [filterType, setFilterType] = useState('all');


  useState(() => {
    instance.get('/api/seller')
      .then(res => {
        setallSeller(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);


  const handleActivate = (sellerId) => {
    instance.post('/api/seller/activate', { seller_id: sellerId })
      .then(res => {
        // Update the local state to reflect the new activation_state
        setallSeller(prevSellers => (
          prevSellers.map(seller => (
            seller.seller_id === sellerId
              ? { ...seller, activation_state: 1 }
              : seller
          ))
        ));
        console.log('Seller activated:', res.data);
      })
      .catch(err => {
        console.log('Error activating seller:', err.response);
      });
  };

  const handleDeactivate = (sellerId) => {
    instance.post('/api/seller/deactivate', { seller_id: sellerId })
      .then(res => {
        // Update the local state to reflect the new activation_state
        setallSeller(prevSellers => (
          prevSellers.map(seller => (
            seller.seller_id === sellerId
              ? { ...seller, activation_state: 0 }
              : seller
          ))
        ));
        console.log('Seller deactivated:', res.data);
      })
      .catch(err => {
        console.log('Error deactivating seller:', err.response);
      });
  };


  // const filteredSellers = allSeller.filter(seller =>
  //   seller.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   seller.store_name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredSellers = allSeller.filter(seller => {
    const matchesSearchTerm =
      seller.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.store_name.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterType === 'all') {
      return matchesSearchTerm;
    } else if (filterType === 'activate') {
      return seller.activation_state === 1 && matchesSearchTerm;
    } else if (filterType === 'deactivate') {
      return seller.activation_state === 0 && matchesSearchTerm;
    }

    return true;
  });

  return (
    <div className='main-seller-fram'>
      <div className='fram-header'>
        <p>Seller</p>
      </div>

      <div className='filter'>
        {/* <label><input type="checkbox" />Activate</label>
        <label><input type="checkbox" />Deactivate</label> */}

        <div className="filter-radio" style={{ display: 'flex' }}>
          <label>
            <input
              type="radio"
              name="filterType"
              value="all"
              checked={filterType === 'all'}
              onChange={() => setFilterType('all')}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filterType"
              value="activate"
              checked={filterType === 'activate'}
              onChange={() => setFilterType('activate')}
            />
            Activate
          </label>
          <label>
            <input
              type="radio"
              name="filterType"
              value="deactivate"
              checked={filterType === 'deactivate'}
              onChange={() => setFilterType('deactivate')}
            />
            Deactivate
          </label>
        </div>

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
          <div className='name'>User Name</div>
          <div className='sub-catagory'>Store Name</div>
          <div className='main-catagory'>Main Catagory</div>
          <div className='address'>Address</div>
          <div className='mobile'>Mobile</div>
          <div className='item'>Verified Seller</div>
          <div className='activatetion'>Activate/Deactivate</div>
        </div>

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}


          {/* ---------------------------------------table data (repeat section) ----------------------------------- */}
          {filteredSellers.map((sellers, index) => (
            <div className='data-section' key={index}>
              <div className='body-name'>{sellers.user_name}</div>
              <div className='body-main-catagory'>{sellers.store_name}</div>
              <div className='body-sub-catagory'> {sellers.C_ID === 1 ? 'SOLID' : sellers.C_ID === 2 ? 'FOOD' : ''}</div>
              <div className='body-address'>{sellers.district_name}</div>
              <div className='body-mobile'>{sellers.mobile}</div>
              <div className='body-more-deatil'>{sellers.verify_seller === 1 ? 'Yes' : sellers.verify_seller === 0 ? 'No' : ''}</div>
              <div className='body-activatetion'>
                {sellers.activation_state === 1 ? (
                  <button className='deactivate' onClick={() => handleDeactivate(sellers.seller_id)}>
                    Deactivate
                  </button>
                ) : (
                  <button className='activate' onClick={() => handleActivate(sellers.seller_id)}>
                    Activate
                  </button>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
