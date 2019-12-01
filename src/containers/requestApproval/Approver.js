import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

const Approver = ({approver, approved, countObj, ...props}) => {
    countObj.count++
    return <div className="approver-container padded-small font-sm">
        <div className="approver-count">{countObj.count}</div>
        <div className="approver-user-img">
            <img src={approver.approver.profile_picture} height={30} alt={`${approver.approver.first_name} ${approver.approver.last_name}`}/>
        </div>
        <div className="approver-name">
            {`${approver.approver.first_name} ${approver.approver.last_name}`} <span className="text-gray">({approver.approver.email})</span>
        </div>
        <div className="approver-date text-gray">
            {!!approved ? 'Approved on' : 'Last notified'} {moment(approver.last_updated_date).format('MMM DD, YYYY')}
        </div>
        <div className="approver-icon">
            <FontAwesomeIcon icon={!!approved ? faCheckCircle : faCircle} size="2x" className={approved ? "text-green" : "text-light-gray"} />
        </div>
    </div>
}

export default Approver