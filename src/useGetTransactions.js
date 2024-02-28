import { query, collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotal, setTransactionTotal] = useState({
    balance: 0.00,
    expense: 0.00,
    income: 0.00,
  })
  const transactionCollection = collection(db, "transactions");
  const { userID } = useGetUserInfo();
  let unsnapshot;
  const getTransactions = async () => {
    try {
      const queryTransaction = query(
        transactionCollection,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
      unsnapshot = onSnapshot(queryTransaction, (snapshot) => {

        let docs = [];
        let totalIncome = 0;
        let totalExpense = 0;

        snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;

            docs.push({...data, id});
            if (data.transactionType==="debited") {
              totalExpense += Number(data.amount);
            } else {
              totalIncome += Number(data.amount);
            }
        });

        setTransactions(docs);
        setTransactionTotal({
          balance: totalIncome-totalExpense ,
          expense: totalExpense,
          income: totalIncome,
        })
      });
    } catch (err) {
      console.log(err);
    }

    return () => unsnapshot();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, transactionTotal };
};
