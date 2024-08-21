import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase.tsx";
import firebase from "firebase/compat/app";

export const SendMessage = () => {
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    e.preventDefault();

    const { photoURL, uid } = auth.currentUser;

    const docRef = addDoc(collection(db, "messages"), {
      text: message,
      photoURL,
      uid,
      cratedAt: firebase.firestore.FieldValue.serverTimestamp(), //フォームでEnterキーを押した時間を取得
    });
    return docRef;
  };
  return (
    <div>
      <form onSubmit={sendMessage()}>
        <div className="sendMsg">
          <input
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
