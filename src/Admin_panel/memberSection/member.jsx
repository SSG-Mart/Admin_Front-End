import React from 'react'
import './member.scss'

export default function member() {
  return (
    <div className='main-member-fram'>
    <div className='fram-header'>
        <p>Members</p>
    </div>
    <div className='table-fram'> {/* ---------------------------------------table fram----------------------------------- */}
        <div className='table-header'> {/* ---------------------------------------table header----------------------------------- */}
            <div className='name'>User Name</div>
            <div className='item-catagory'>Item Catagory</div>
            <div className='quality'>Quality</div>
            <div className='deatail'>Detail</div>
        </div> 

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

        {/* ---------------------------------------table data (repeat section) ----------------------------------- */}    
            <div className='data-section'> 
                <div className='body-name'>User Name 1</div>
                <div className='body-item-catagory'>Food</div>
                <div className='body-quality'>1</div>
                <div className='body-deatail'>Click here</div>
            </div>

        </div>
    </div>
</div>
  )
}
