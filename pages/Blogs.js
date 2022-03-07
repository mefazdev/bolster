import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import moment from "moment";

import cookies from "js-cookie";
export default function Blogs() {
  const [blog, setBlog] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const data = !showMore ? blog.slice(0, 6) : blog;

  const fetchData = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?_sort=published_at:desc`
      )

      .then((response) => {
        setBlog(response.data);
      });
    console.log(blog.map((data) => console.log("data >>>>", data)));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Navbar />

      <div className="blogs">
        <div className="blogs__main">
          <div className="about__main__head">
            <h1>Blogs</h1>
          </div>
        </div>

        <div className="blogs__content" style={{scrollBehavior:'smooth'}}>
          {data.map((data, index) => {
            const date = moment(data.date).format("MMM DD YYYY");
            const content = data.content.slice(0, 600);
            return (
              <div
                key={index}
                className="blog__box gap-5 lg:gap-10 grid lg:grid-cols-3"
              >
                <div className="">
                  <img src={data.thumbnail.url} />
                </div>
                <div className="lg:col-span-2">
                  <h2>{data.title}</h2>
                  <h3>
                    {date} | {data.author}
                  </h3>
                  <p id="desk__p">{content}</p>

                  <Link href="/Blog">
                    <button
                      onClick={() => cookies.set("blogId", data.slug)}
                      id="blog__list__button"
                    >
                      READ MORE
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
