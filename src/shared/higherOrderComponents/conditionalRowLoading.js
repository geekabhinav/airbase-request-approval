import React from 'react'
import {LineLoader} from "../placeholder/lineLoader";

const ConditionalRowLoading = ({isFetching, ...props}) => {
    if(isFetching)
        return <LineLoader/>
    else
        return props.children
}

export default ConditionalRowLoading