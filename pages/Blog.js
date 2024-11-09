import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

import { useEffect, useState } from "react";
 
import axios from "axios";
import moment from "moment";
 
import ReactMarkdown from "react-markdown";

import Head from "next/head";
import Image from "next/image";
export default function Blog({ initailValue }) {
  const slug = initailValue;

  const [blog, setBlog] = useState([]);
  const [similarBlog, setSimilarBlog] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [state, setState] = useState(false);

  const fetchData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?slug=${slug}`)

      .then((response) => {
        setBlog(response.data[0]);
      });

    setState(true);
  };

  const handleClick = async (id) => {
    cookies.set("blogId", id);
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?slug=${slug}`)

      .then((response) => {
        setBlog(response.data[0]);
      });
  };
  const fetchSimilarBlog = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?_sort=published_at:desc`
      )

      .then((response) => {
        setSimilarBlog(response.data);
      });
  };

  useEffect(() => {
    fetchData();

    fetchSimilarBlog();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="blog" style={{scrollBehavior:'smooth'}}>
        <div className="blogs__main">
          <div className="about__main__head">
            <h1>Blog</h1>
          </div>
        </div>

        <div className="blogMore__content">
          <div>
            <h2>{blog.title}</h2>
            <h6>
              {moment(blog.date).format("MMM DD YYYY")} | {blog.author}
            </h6>
            <div className="blogMore__img">
              <Image alt="" src={blog.image ? `${blog.image.url}` : ""} />
            </div>
            <p>
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </p>
          </div>
        </div>
        <div className="blog__more">
          {similarBlog.map((data, index) => {
            const date = moment(data.date).format("MMM DD YYYY");
            const content = data.content.slice(0, 500);
            if (index <= 2) {
              return (
                <div
                  key={index}
                  className="blog__box pt-5  gap-10 grid lg:grid-cols-3"
                >
                  <div className="">
                    <Image src={`${data.thumbnail.url}`} alt=""/> {" "}
                  </div>
                  <div className="lg:col-span-2">
                    <h2>{data.title}</h2>
                    <h3>
                      {date} | {data.author}
                    </h3>
                    <p>
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </p>

                    <Link href="/Blog" passHref>
                      <button
                        value={data.slug}
                        onClick={(e) => handleClick(e.target.value)}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Blog.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);
//   return {
//     initailValue: cookies.blogId,
//   };
// };
