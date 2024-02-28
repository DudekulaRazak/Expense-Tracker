<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React from "react";
>>>>>>> origin/main
import { useState } from "react";
import { useAddTransactions } from "../useAddTransactions";
import { useGetTransaction } from "../useGetTransactions";
import { auth, db } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
<<<<<<< HEAD
import { useGetUserInfo } from "../useGetUserInfo";
=======
>>>>>>> origin/main
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const Homepage = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transType, setTransType] = useState("");
<<<<<<< HEAD
  const [added, setAdded] = useState(false);
=======
>>>>>>> origin/main
  const { addTransaction } = useAddTransactions();
  const { transactions, transactionTotal } = useGetTransaction();

  const { balance, expense, income } = transactionTotal;
<<<<<<< HEAD
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("auth")==null) {
      navigate("/");
    }
  },[]);

  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => {
        setAdded(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [added]);
=======
>>>>>>> origin/main

  const onSubmit = async (e) => {
    e.preventDefault();
    addTransaction({
      description: description,
      amount: amount,
      transactionType: transType,
    });
<<<<<<< HEAD
    setAmount("");
    setDescription("");
    setAdded(true);
=======
>>>>>>> origin/main
  };

  const deleteTransaction = async (createdAt, userID) => {
    try {
      const q = query(
        collection(db, "transactions"),
        where("createdAt", "==", createdAt),
        where("userID", "==", userID)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
      }
    } catch (error) {
      console.error("Error deleting transaction: ", error);
    }
  };

<<<<<<< HEAD
=======
  const navigate = useNavigate();

>>>>>>> origin/main
  const signUserOut = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Expense Tracker</h3>
        <div className="balance">
          <div className="currentValues">
            <h2>Current Balance: </h2>
            <h1>{balance}</h1>
          </div>
          <div className="currentValues">
            <h2>Income: </h2>
            <h1>{income}</h1>
          </div>
          <div className="currentValues">
            <h2>Expense: </h2>
            <h1>{expense}</h1>
          </div>
        </div>
      </div>
      <input
        type="submit"
        onClick={signUserOut}
        name="logout"
        value="Logout"
        className="logout-btn"
      />
      <div className="transaction-section">
        <div className="add-transaction">
          <form onSubmit={onSubmit}>
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
            />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
<<<<<<< HEAD
              value={description}
=======
>>>>>>> origin/main
              required
            />
            <select onChange={(e) => setTransType(e.target.value)} required>
              <option disabled selected>
                Transaction type
              </option>
              <option value="credited">Credited</option>
              <option value="debited">Debited</option>
            </select>
            <input
              type="submit"
              name="submit"
              value="Add"
              className="add-btn"
            />
<<<<<<< HEAD
            {added && <i>Transaction has been added !</i>}
=======
>>>>>>> origin/main
          </form>
        </div>
        <div className="transactions">
          <h3>Transactions</h3>
          <ul>
<<<<<<< HEAD
            {transactions.slice().reverse().map((transaction, index) => {
=======
            {transactions.map((transaction, index) => {
>>>>>>> origin/main
              const {
                userID,
                description,
                amount,
                transactionType,
                createdAt,
              } = transaction;
              return (
                <div
                  style={{
                    backgroundColor:
                      transactionType === "credited" ? "#eefeeb" : "#feebeb",
                  }}
                >
                  <li key={index}>
                    <div>
                      <h4>
                        {transactionType === "credited" ? " + " : " - "}
                        {description}
                      </h4>
                      <h4>{amount}/-</h4>
                    </div>
                    <img
                      onClick={() => deleteTransaction(createdAt, userID)}
                      src={require("../delete.png")}
                      alt="delete"
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
