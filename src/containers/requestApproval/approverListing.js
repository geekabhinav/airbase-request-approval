import React from 'react'
import {groupBy, titleCase} from "../../shared/commons";
import Approver from "./Approver";
import {LineLoader} from "../../shared/placeholder/lineLoader";

const STATUS_MAPPING = {
    'accepted': 'Approved',
    'created': 'Pending'
}

const StatusHeader = ({status}) => {
    return <p className="no-margin text-gray">{titleCase(STATUS_MAPPING[status] ? STATUS_MAPPING[status] : status)}</p>
}

const StatusSection = ({status, approvers, countObj}) => {
    return <div className="status-section padded">
        <StatusHeader status={status}/>
        <div className="user-list">
            {approvers.map(approver => <Approver approver={approver} countObj={countObj}
                                                 approved={status === 'accepted'}/>)}
        </div>
    </div>
}

const ApproverListing = ({data, isFetching, ...props}) => {
    if (isFetching)
        return <div className="status-section padded">
            {[0, 1, 2, 4].map(idx => <LineLoader/>)}
        </div>

    const groupedByStatus = groupBy(data.approvers, 'status')

    let renderArray = [], countObj = {count: 0}
    for (let status in groupedByStatus) {
        renderArray.push(<StatusSection status={status} approvers={groupedByStatus[status]} countObj={countObj}/>)
    }

    return renderArray
}

export default ApproverListing