import './App.css';
import Navbar from "./Components/Navbar"
import {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home"
import Case from "./Components/Case"
import Cases from "./Components/Cases"
import Creditor from './Components/Creditor';
import Creditors from "./Components/Creditors"
import CaseStatistics from "./Components/CaseStatistics"

//Hvordan pasere match og props sammen

function App() {
    const [key, setKey] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setKey("")
      setLoading(false)
    }, [key])

  return (
    
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/case-statistics"><CaseStatistics authToken={key}/></Route>
          <Route path="/creditors" exact> <Creditors authToken={key}/></Route>
          <Route path="/cases" exact> <Cases authToken={key}/></Route>
          {/* <Route path="/cases/:id"> <Case authToken={key}/></Route> */}
          <Route path="/cases/:id" component={Case}/>
          {/* <Route path="/creditors/:id"><Creditor authToken={key}/></Route> */}
          <Route path="/creditors/:id" component={Creditor}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;






