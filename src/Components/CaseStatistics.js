import { useState, useEffect } from "react"
import axios from "axios"

function CaseStatistics ({authToken}){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [statistics, setStatistics] = useState({})

    useEffect(() => {
        axios
        .get("https://api-staging.kraviainkasso.no/api/v2/statistic/creditor", {
            headers: {
                Authorization: authToken
        }
        })
        .then(response => {
            setLoading(false)
            setStatistics(response.data)
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setStatistics({})
            setError(error.message)
    })
  }, [])


return (
        <div>
            <h1>Case Statistics</h1>
            {loading ? <h1>Loading</h1> : 
                <div>
                <p>Open cases - {statistics.openCases}</p>
                <p>Waiting cases - {statistics.waitingCases}</p>
                <p>Closed cases - {statistics.closedCases}</p>
                <p>Cases with action required : {statistics.casesWithActionRequired}</p>
                <p>Sum collected money - {statistics.sumCollectedMoney}</p>
                <p>sum potential money - {statistics.sumPotentialMoney}</p>
                </div>}
            {   error ? error : null}
        </div>
    )
}

export default CaseStatistics