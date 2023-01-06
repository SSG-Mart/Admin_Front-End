import React from 'react'
import './filter.scss'
import { FiFilter } from "react-icons/fi";
import { BsBookmarkCheck } from "react-icons/bs";
import { RiFolderWarningLine } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";

export default function filter() {
  return (
        <div className='filter-fram'> 
            <div className='fram-header'> 
                <FiFilter style={{color:'white'}}/>
                <p style={{marginLeft:'5px'}}>Filter</p>
            </div>

            <div className='filter-body'> 

                <div className='top'>

                    <div className='left'> 
                        <BsBookmarkCheck color="green" size={20}/>
                        <p>Check Quality For Users</p> 
                        <input type="number" />
                    </div>

                    <div className='right'>
                        <div className='header'>
                            <p>Member</p>
                        </div>
                        <div className='body'> 
                                        
                        {/* ---------------------------------------filter quality result (repeat section)----------------------------------- */}    
                            <div className='users'>User 1</div>

                        </div>
                    </div>

                </div>

                <hr color="gray" style={{marginTop:"10px", width:'100%'}}/>

                <div className='down'>

                    <div className='left'>

                    <form action="/" method="get" className='form'> 
                        <input className='search' type="text" id="search" placeholder="Enter user name..."/>
                        <div>
                            <button className='search-btn' ><i className="fa-solid fa-magnifying-glass"></i></button> 
                        </div>
                    </form>

                    <div className='feedback'> 

                        <textarea
                            type="text"
                            rows="4"
                            cols="26"
                            placeholder="Problems And Other Issue"
                        />
                    </div>

                    </div>
                    <div className='right'>
                        <div className='btn'>
                            <div className='warning'> <p style={{marginRight:'4px'}}>Warning</p><RiFolderWarningLine /></div> {/* ---------------------------------------worning button----------------------------------- */}
                            <div className='remove'> <p style={{marginRight:'4px'}}>Remove</p><GrUserSettings /></div> {/* ---------------------------------------remove button----------------------------------- */}
                        </div>
                    </div>
                </div>    
            </div>
        </div>
  )
}
