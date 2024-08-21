import "./App.css";
import { SignIn } from "./components/SignIn.tsx";
import { useAuthState } from "react-firebase-hooks/auth"; //認証できているかどうかのbool
import { auth } from "./firebase.tsx"; //今の認証状態
import Line from "./components/Line.tsx";

function App() {
  const [user] = useAuthState(auth);

  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
