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
  const [adding,setAdding] = useState(false)
  const [deleting,setDeleting] = useState(false)
  const router = useRouter();
  const addLink = async () => {
    setAdding(true)
    if(link){
      const docRef = await addDoc(collection(db, "link"), {
        link: link,
        timestamp: serverTimestamp(),
      });
  
      setLink("");
      setOpen(false);
      setAdding(false)
    }
   
  };

  const fetchData = async () => {
    const q = await query(collection(db, "link"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setSocial(snapshot.docs.map((doc) => doc));
    });
  };
  const deletItem = async (id) => {
    setDeleting(true)
    await deleteDoc(doc(db,"link", id));
    setDeleting(false)
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
    <div className="pb-36">
      {admin ? (
        <>
          <div className="admin__nav bg-gray-700">
            <div className="admin__add">
              <button onClick={() => setOpen(!open)} className="bg-emerald-600 rounded">Add Link</button>
              <button onClick={adminControll} id="logou" className="bg-red-400 rounded ml-4">
                Logout
              </button>
            </div>
          </div>

          <div className="admin__content ">
            <div className="admin__row grid lg:grid-cols-4">
              {social.map((link, index) => {
                return (
                  <div key={index} className="mt-10 m-auto">
                    <iframe
                      src={link.data().link}
                      style={{ border: "none", overflow: "hidden" }}
                      width="200"
                      height="301"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                    <div className="flex">
                    <button className="mt-6 bg-red-600 w-full px-4  text-white"
                      // id="admin__del__button"
                      value={link.id}
                      onClick={(e) => deletItem(e.target.value)}
                    >
                      Delete 
                    </button>
                      </div>
                    
                  </div>
                );
              })}
            </div>
          </div>

          <Modal open={open}>
            <div className="add__modal bg-gray-200 w-6/12 ">
              <CloseIcon id="close__res" onClick={() => setOpen(false)} />
              <div className="link__modal__row">
                {/* <label>Link</label> */}
                <input placeholder="Paste Link" className="border p-1 pl-3 rounded w-11/12 shadow-md " value={link} onChange={(e) => setLink(e.target.value)} />
              </div>
              <div className="flex mt-4 w-full">
                 <button className="bg-emerald-600 p-1 px-7 rounded text-white  m-auto" onClick={addLink}>{adding ? 'Saving...' : 'Add'}</button>
         
              </div>
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
