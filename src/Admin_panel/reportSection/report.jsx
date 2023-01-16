import React from 'react'
import './report.scss'
import { RiFolderWarningLine } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";

export default function filter() {
  return (
    <div className='report-contaier' id='report'>
      <div className='headre-name'>Review Report</div>
      <div className='report-body'>
      <div className='table-fram'> {/* ---------------------------------------table fram----------------------------------- */}
        <div className='table-header'> {/* ---------------------------------------table header----------------------------------- */}
            <div className='number'>Number</div>
            <div className='user-name'>User Name</div>
            <div className='report'>Number of report</div>
            <div className='action-report'>Fault</div>
            <div className='action'>Action</div>
        </div> 

        <div className='table-body'> {/* ---------------------------------------table body----------------------------------- */}

        {/* ---------------------------------------table data (repeat section) ----------------------------------- */}    
          <div className='data-section'> 
            <div className='body-number'>1</div>
            <div className='body-user-name'>User 1</div>
            <div className='body-report'>1</div>
            <div className='body-action-report'>
              <textarea type="text" rows="4" cols="26" placeholder="Enter Your Description" />
            </div>
            <div className='body-action'>
              <div className='warning'><p style={{marginRight:'4px'}}>Warning</p><RiFolderWarningLine /></div>
              <div className='remove'><p style={{marginRight:'4px'}}>Remove</p><GrUserSettings /></div>
            </div>
          </div>

        </div>
    </div>
      </div>
    </div>
  )
}
