import React, { useState, useEffect } from "react"
import axios from "axios"

function Creditor ({match}) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [creditor, setCreditor] = useState({})

    useEffect(() => {
        console.log("Did it")
        axios
        .get(`https://api-staging.kraviainkasso.no/api/v2.0/creditor/${match.params.id}/settings`, {
            headers: {
                Authorization: ""
        }
        })
        .then(response => {
            setLoading(false)
            setCreditor(response.data)
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setCreditor({})
            setError(error.message)
    })
  }, [])


return (
        <div>
            {loading ? <h1>Loading</h1> : 
            <div >
            <h1>{creditor.orgNumber} {creditor.name}</h1>
            <p>Email: {creditor.email}</p>
            <p>Vat: {creditor.Vat}</p>
            <p>Interest: {creditor.Interest}</p>
            </div>
            }
            {   error ? error : null}
        </div>
    )
}

export default Creditor