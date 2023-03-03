import React from 'react';
import "./buyer.scss";

export default function buyer() {
  return (
    <div className='main-buyer-fram'>
    <div className='fram-header'>
        <p>Buyer</p>
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
            <div className='item-catagory'>Item Catagory</div>
            <div className='mobile'>Mobile</div>
            <div className='isSeller'>Is seller</div>
            <div className='activatetion'>Activate/Deactivate</div>
        </div> 

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

        {/* ---------------------------------------table data (repeat section) ----------------------------------- */}    
            <div className='data-section'> 
                <div className='body-name'>User Name 1</div>
                <div className='body-item-catagory'>Food</div>
                <div className='body-mobile'>123456789</div>
                <div className='body-isSeller'>Yes</div>
                <div className='body-activatetion'>
                    <div className='activate'>Activate</div>
                    <div className='deactivate'>Deactivate</div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}
