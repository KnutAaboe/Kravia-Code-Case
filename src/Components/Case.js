import React, { useState, useEffect } from "react"
import axios from "axios"

function Case ({match}) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [debtCase, setDebtCase] = useState({})

    useEffect(() => {
        axios
        .get(`https://api-staging.kraviainkasso.no/api/v2.0/invoice/${match.params.id}/details`, {
            headers: {
                Authorization: ""
        }
        })
        .then(response => {
            
            setLoading(false)
            setDebtCase(response.data.value)
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setDebtCase({})
            setError(error.message)
    })
  }, [])

    return (
        <div>
            {loading ? "Loading" : debtCase.invoice && 
            <h1>invoiceNo: {debtCase.invoice.invoiceNo}</h1>
            
            }
            {   error ? error : null}
        </div>
    )
}

export default Case