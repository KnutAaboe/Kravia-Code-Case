import React, { useState, useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"



function Cases ({authToken}) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios
        .get("https://api-staging.kraviainkasso.no/api/v2.0/invoice/search/q", {
            headers: {
                Authorization: authToken
        }
        })
        .then(response => {
            setLoading(false)
            setCases(response.data.data.filter(invoice => {
                if (invoice.claimType === "Open"){
                    return invoice
                }
                }))
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setCases([])
            setError(error.message)
    })
  }, [])

    return (
        <div className="case-section">
            <h1>On Going Debt Cases</h1>
            {/* {console.log(cases)} */}
            {loading ? "Loading" : cases.map((debtCase) => {
                return(
                    <div className="content">
                    <h1 key={debtCase.id}>
                    <Link to={`/cases/${debtCase.id}`}>{debtCase.invoiceNo}</Link>
                    </h1>
                    <p>State - {debtCase.claimType}</p>
                    <p>Due Date - {debtCase.invoiceDue}</p>
                    <p>Org Number - {debtCase.creditorOrgNumber} Name - {debtCase.creditorName}</p>
                    <p>{}</p>
                    <p>{}</p>
                    </div>
                    )
            })}
            {   error ? error : null}
        </div>
    );
}

export default Cases

