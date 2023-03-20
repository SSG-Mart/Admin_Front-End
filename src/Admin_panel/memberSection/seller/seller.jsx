import React from 'react';
import "./seller.scss";

export default function seller() {
  return (
    <div className='main-seller-fram'>
    <div className='fram-header'>
        <p>Seller</p>
    </div>

    <div className='filter'>
        <label><input type="checkbox" />Activate</label>
        <label><input type="checkbox" />Deactivate</label>
        <form action="/" method="get" className="form">
            <input className="search" type="text" id="search" placeholder="Search user name..."/>
        </form>{" "}
          {/* end search class */}
          <div>
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
    </div>
    <div className='table-fram'> {/* ---------------------------------------table fram----------------------------------- */}
        <div className='table-header'> {/* ---------------------------------------table header----------------------------------- */}
            <div className='name'>User Name</div>
            <div className='main-catagory'>Main Catagory</div>
            <div className='sub-catagory'>Sub Catagory</div>
            <div className='address'>Address</div>
            <div className='mobile'>Mobile</div>
            <div className='item'>Item</div>
            <div className='activatetion'>Activate/Deactivate</div>
        </div> 

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

        {/* ---------------------------------------table data (repeat section) ----------------------------------- */}    
            <div className='data-section'> 
                <div className='body-name'>User Name 1</div>
                <div className='body-main-catagory'>Food</div>
                <div className='body-sub-catagory'>fruit</div>
                <div className='body-address'>Polonnaruwa</div>
                <div className='body-mobile'>123456789</div>
                <div className='body-more-deatil'><button>Click here</button> </div>
                <div className='body-activatetion'>
                    <button className='activate'>Activate</button>
                    <button className='deactivate'>Deactivate</button>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}
