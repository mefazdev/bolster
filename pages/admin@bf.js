import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

import Cookies from "js-cookie";
export default function Admin() {
  const auth = getAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const [username, setUsername] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, username, password);
    adminControll();
    router.push({
      pathname: "/Dashboard",
    });
  };

  const adminControll = async () => {
    Cookies.set("Admin", true);
  };

  return (
    <>
      <div className="admin">
        <div className="admin__div">
          <form>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <button type="submit" onClick={signIn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// const signUp = (event) => {
//     event.preventDefault();
//     createUserWithEmailAndPassword( auth,username, password)
//       .then(() => {
//         //   dispatch(userIn())
//         router.push({
//             pathname: '/ResultDash',

//         });
//       })
//       .catch((error) => alert(error.message));

//   };
