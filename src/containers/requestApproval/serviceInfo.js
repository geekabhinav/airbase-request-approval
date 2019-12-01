import React from 'react'
import ServiceInfoTable from "./serviceInfoTable";
import ApproverListing from "./approverListing";

const ServiceInfo = ({isFetching, data, ...props}) => {
    return <div className="grid-parent bg-white">

        <div className="grid title image-cell align-center padded hr">
            <img src={data.service.logo} alt={data.service.name} height={30}/>
            <h3 className="no-margin">Request for {data.service.name}</h3>
        </div>

        <div className="left padded border-right">
            <ServiceInfoTable data={data}/>
            <p className="text-gray">
                <span
                    className="text-red">Your company is already paying for {data.service.name} on a recurring basis.</span>
                <br/>(1 instance owned by John Smith).
            </p>
        </div>

        <div className="right">
            <ApproverListing data={data} />
        </div>

        <div className="button padded border-right">
            <button type="submit" className="btn btn-green">Approve</button>
            <button type="submit" className="btn btn-red">Deny</button>
        </div>
    </div>
}

export default ServiceInfo