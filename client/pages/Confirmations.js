import React  from 'react'
import {MetaCollection} from "meteor/doichain:doichain-meteor-api"
import {useSubscription,useTracker} from "react-meteor-hooks"

const Confirmations = props => {

    //const loading = useSubscription('meta')
    //const meta = useTracker(() => MetaCollection.find({key:'size_on_disk'}).fetch());
    //return (meta.length>0?(JSON.parse(meta[0].value)):'not available');
    return (<h1>Confirmations coming soon!</h1>)
}

export default Confirmations;