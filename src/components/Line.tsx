import React, { useEffect, useState } from "react";
import { SignOut } from "./SignOut.tsx";
import { db } from "../firebase.tsx";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { SendMessage } from "./SendMessage.tsx";

function Line() {
  const [messages, setMessages] = useState<DocumentData[]>([]);
  useEffect(() => {
    const messagesRef = collection(db, "messages"); //db名messagesをとってくる
    const q = query(messagesRef, orderBy("createdAt"), limit(50)); //順序や最大表示数設定
    const unsbscribe = onSnapshot(q, (snapshot) => {
      //data以外にもいろんな情報が入ってるので
      setMessages(snapshot.docs.map((doc) => doc.data())); //整理したqをmapで取り出しdataだけ取り出す
    });
    console.log("messages", messages);
    return unsbscribe;
  }, []); //トリガーを空の配列にすると、初回の１回のみ

  return (
    <div>
      <SignOut />
      <div className="messages">
        {
          //各種プロパティを表示
          messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div key={id}>
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          ))
          //{}:jsやtsが書ける
          //():htmlが書ける
        }
      </div>
      <SendMessage />
    </div>
  );
}

export default Line;
