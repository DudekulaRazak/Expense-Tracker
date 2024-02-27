import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config/firebase";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransactions = () => {
  const transCollection = collection(db, "transactions");
  const { userID } = useGetUserInfo();
  const addTransaction = async ({ description, amount, transactionType }) => {
    await addDoc(transCollection, {
      userID: userID,
      description,
      amount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};
