import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Creditor from "./Creditor"

function Creditors ({authToken}){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [creditors, setCreditors] = useState([])

    useEffect(() => {
        axios
        .get("https://api-staging.kraviainkasso.no/api/v2.0/creditor", {
            headers: {
                Authorization: authToken
        }
        })
        .then(response => {
            setLoading(false)
            setCreditors(response.data.value)
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setCreditors([])
            setError(error.message)
    })
  }, [])


return (
        <div className="case-section">
            <h1>Creditors</h1>
            {loading ? "Loading" : creditors.map((creditor) => {
                return(<div className="content">
                    <h1 key={creditor.id}>
                    <Link to={`/creditors/${creditor.id}`}>{creditor.name}</Link>
                    </h1>
                    <p>{creditor.name}</p>
                    <p>{creditor.organizationNumber}</p>
                    </div>
                    )
            })}
            {   error ? error : null}
        </div>
    )
}

export default Creditors