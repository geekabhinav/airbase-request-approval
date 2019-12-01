import React, {Fragment} from 'react'
import {pluralize} from "../../shared/commons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileExcel} from "@fortawesome/free-regular-svg-icons";

const ServiceInfoTable = ({data, ...props}) => {
    const monthlyCost = !!data.cost_cents ? Math.round(data.cost_cents / 100) : 0
    const yearlyCost = Math.round(monthlyCost * (12 / data.renewal_frequency_in_months))
    return <div className="details">
        <div className="detail_row hr">
            <div><span className="text-gray">Requested by </span></div>
            <div className="grid align-center image-cell">
                <img src={data.requested_by.profile_picture} alt={data.requested_by.first_name} height={20}/>
                <p className="no-margin">{data.requested_by.first_name} {data.requested_by.last_name}</p>
            </div>
        </div>
        <div className="detail_row hr">
            <div><span className="text-gray">Cost</span></div>
            <div>${monthlyCost}</div>
        </div>
        <div className="detail_row hr">
            <div><span className="text-gray">Renewal Frequency</span></div>
            <div className="detail_row no-padding">
                <div>{`${data.renewal_frequency_in_months} ${pluralize('month', 'months', data.renewal_frequency_in_months)}`}</div>
                <div className="detail_row image-cell">
                    <div><span className="text-gray">Annual Cost</span></div>
                    <div>${yearlyCost}</div>
                </div>
            </div>
        </div>
        <div className="detail_row hr">
            <div><span className="text-gray">Expense Account</span></div>
            <div>{data.expense_account}</div>
        </div>
        <div className="detail_row hr">
            <div><span className="text-gray">File</span></div>
            <div>{data.files.map(file => {
                return <Fragment>
                    <FontAwesomeIcon icon={faFileExcel} size="lg"
                                     className="text-green"/> {file.split('/').pop()}
                </Fragment>
            })}</div>
        </div>
        <div className="detail_row hr">
            <div><span className="text-gray">Description</span></div>
            <div>{data.description}</div>
        </div>
    </div>
}

export default ServiceInfoTable