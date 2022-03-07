import React from "react";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  serverTimestamp,
  deleteDoc,
} from "@firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import { parseCookies } from "./api/parseCookies";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
export default function Dashboard({ admin }) {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [social, setSocial] = useState([]);
  const router = useRouter();
  const addLink = async () => {
    const docRef = await addDoc(collection(db, "link"), {
      link: link,
      timestamp: serverTimestamp(),
    });

    setLink("");
    setOpen(false);
  };

  const fetchData = async () => {
    const q = await query(collection(db, "link"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setSocial(snapshot.docs.map((doc) => doc));
    });
  };
  const deletItem = async (id) => {
    await deleteDoc(doc(db, "link", id));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const adminControll = async () => {
    Cookies.set("Admin", false);
    router.push({
      pathname: "/admin@bf",
    });
  };
  return (
    <div>
      {admin ? (
        <>
          <div className="admin__nav">
            <div className="admin__add">
              <button onClick={() => setOpen(!open)}>Add</button>
              <button onClick={adminControll} id="logout">
                Logout
              </button>
            </div>
          </div>

          <div className="admin__content ">
            <div className="admin__row grid lg:grid-cols-4">
              {social.map((link, index) => {
                return (
                  <div key={index}>
                    <iframe
                      src={link.data().link}
                      style={{ border: "none", overflow: "hidden" }}
                      width="200"
                      height="301"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                    <button
                      id="admin__del__button"
                      value={link.id}
                      onClick={(e) => deletItem(e.target.value)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <Modal open={open}>
            <div className="add__modal">
              <CloseIcon id="close__res" onClick={() => setOpen(false)} />
              <div className="link__modal__row">
                <label>Link</label>
                <input value={link} onChange={(e) => setLink(e.target.value)} />
              </div>
              <button onClick={addLink}>Add</button>
            </div>
          </Modal>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

Dashboard.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    admin: cookies.Admin,
  };
};
