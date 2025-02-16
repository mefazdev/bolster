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
  limit,
  getDocs,
} from "@firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";

import { useRouter } from "next/router";
import { isAdmin } from "../lib/checkAuth";
export default function Dashboard({ admin }) {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");

  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const q = query(
    //     collection(db, "link"),
    //     orderBy("timestamp", "desc"),
      
    //   );
     
    //   const data = await getDocs(q);
    //   setLinks(data.docs.map((doc) => doc.data()));
    // };
    const fetchData = async () => {
      const q =  query(collection(db, "link"), orderBy("timestamp", "desc"));
      onSnapshot(q, (snapshot) => {
        setLinks(snapshot.docs.map((doc) => doc));
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
    // Run Instagram embed script AFTER component renders
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [links]); // Run this effect whenever `links` updates

  const addLink = async () => {
    setAdding(true);
    if (link) {
      const docRef = await addDoc(collection(db, "link"), {
        link: link,
        timestamp: serverTimestamp(),
      });

      setLink("");
      setOpen(false);
      setAdding(false);
    }
  };

  const deletItem = async (id) => {
    setDeleting(true);
    await deleteDoc(doc(db, "link", id));
    setDeleting(false);
  };

  const adminControll = async () => {
    // Cookies.set("Admin", false);
    // router.push({
    //   pathname: "/admin@bf",
    // });
    handleLogout();
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/Login");
  };
  return (
    <div className="pb-36">
      {/* {admin ? ( */}
      <>
        <div className="admin__nav bg-gray-700">
          <div className="admin__add">
            <button
              onClick={() => setOpen(!open)}
              className="bg-emerald-600 rounded"
            >
              Add Link
            </button>
            <button
              onClick={adminControll}
              id="logou"
              className="bg-red-400 rounded ml-4"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="admin__content ">
          <div className="admin__row grid lg:grid-cols-3 gap-2">
            {links.length > 0 &&
              links.map((d) => (
                <div key={d.data().link} className="mx-auto">
                
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={d.data().link}
                    data-instgrm-version="14"
                  ></blockquote>
                  <div className="flex">
                    <button
                      className="mt-6 bg-red-600 w-8/12 mx-auto   text-white"
                      // value={link.id}
                      onClick={(e) => deletItem(d.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <script async src="https://www.instagram.com/embed.js"></script>
        </div>

        <Modal open={open}>
          <div className="add__modal bg-gray-200 w-6/12 ">
            <CloseIcon id="close__res" onClick={() => setOpen(false)} />
            <div className="link__modal__row">
              <input
                placeholder="Paste Link"
                className="border p-1 pl-3 rounded w-11/12 shadow-md "
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="flex mt-4 w-full">
              <button
                className="bg-emerald-600 p-1 px-7 rounded text-white  m-auto"
                onClick={addLink}
              >
                {adding ? "Saving..." : "Add"}
              </button>
            </div>
          </div>
        </Modal>
      </>
      {/* // ) : (
      //   ""
      // )} */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const req = context.req;

  if (!isAdmin(req)) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
// Dashboard.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     admin: cookies.Admin,
//   };
// };
