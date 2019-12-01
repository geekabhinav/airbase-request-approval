import React from 'react'
import ServiceInfoTable from "./serviceInfoTable";
import ApproverListing from "./approverListing";
import ConditionalRowLoading from "../../shared/higherOrderComponents/conditionalRowLoading";

const ServiceInfo = ({isFetching, data, ...props}) => {
    return <div className="grid-parent bg-white">

        <div className="grid title image-cell align-center padded hr">
            <ConditionalRowLoading isFetching={isFetching}>
                <img src={data.service.logo} alt={data.service.name} height={30}/>
                <h3 className="no-margin">Request for {data.service.name}</h3>
            </ConditionalRowLoading>
        </div>

        <div className="left padded border-right">
            <ServiceInfoTable data={data} isFetching={isFetching}/>
            <p className="text-gray">
                <ConditionalRowLoading isFetching={isFetching}>
                    <span className="text-red">Your company is already paying for {data.service.name} on a recurring basis.</span>
                    <br/>(1 instance owned by John Smith).
                </ConditionalRowLoading>
            </p>
        </div>

        <div className="right">
            <ApproverListing data={data} isFetching={isFetching}/>
        </div>

        <div className="button padded border-right">
            <button type="submit" className="btn btn-green" disabled={!!isFetching}>Approve</button>
            <button type="submit" className="btn btn-red" disabled={!!isFetching}>Deny</button>
        </div>
    </div>
}

export default ServiceInfo