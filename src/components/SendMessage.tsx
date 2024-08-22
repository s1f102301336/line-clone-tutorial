import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase.tsx";
import { serverTimestamp } from "firebase/firestore";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
//compatはすべて互換性モードであり、混在させるべきではない

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  //テキストの初期値を""にすることで、undefind型ではなくstringだと明示できる

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      console.error("User is not logged in");
      return;
    }

    const { photoURL, uid } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: message,
      photoURL,
      uid,
      createdAt: serverTimestamp(), //フォームでEnterキーを押した時間を取得
    });
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        {/* 関数()の場合：レンダリング時に関数が呼び出され、戻り値がセットされる
            関数の場合：onSubmit時に関数が呼び出され、実行する */}
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
};
