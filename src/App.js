// dependecies
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import axios from "axios";

import "./App.css";

//components
import NavBar from "./Components/NavBar";

//pages
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

import { apiURL } from "./util/apiURL";
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransaction) => {
    let res;
    try {
      res = await axios.post(`${API} /transactions`, newTransaction);
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        res.data,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTransactions = async (updateTransactions, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updateTransactions);
      const newTransactions = [...transactions];
      newTransactions[index] = updateTransactions;
      setTransactions(newTransactions);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTransactions = async () => {
    let res;
    try {
      res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  const deleteTransactions = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
    }catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTransactions();
  })

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
          <Route path="/transactions/:index/edit">
            <Edit updateTransactions={updateTransactions} />
          </Route>
          <Route>
            <New addTransaction={addTransaction} />
          </Route>
          <Route>
            <Index exact path="transactions/" transactions={transactions} />
          </Route>
          <Route>
            <Show deleteTransactions={deleteTransactions}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
