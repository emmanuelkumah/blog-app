import React from "react";
import "../css/Blog.css";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { BsCalendar2Date } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Footer from "./Footer";

function Blog({ postLists }) {
  return (
    <>
      <section>
        <h3 className="sectionCaption">Checkout the latest articles</h3>
      </section>
      <div className="post__cards">
        {postLists.map((post) => (
          <div key={post.id} className="post__card__item">
            <article>
              <div className="card">
                <div className="card__cover">
                  <img src="images/imgBlog.png" className="cardImg" />
                  <p className="post__category">{post.category}</p>
                </div>
                <div className="card__author">
                  <p>
                    <BsCalendar2Date className="postIcon" />
                    {post.date}
                  </p>
                  <p>
                    <BiUserCircle className="postIcon" /> @{post.author.name}
                  </p>
                </div>

                <div className="post__content">
                  <h3 className="post__title">{post.title}</h3>
                  <p className="post__desc">{post.content}</p>
                </div>
              </div>
            </article>

            <div>
              <div className="post__social__container">
                <FacebookShareButton
                  className="post__social__share"
                  url="http://localhost:3000/"
                  quote="Join the party"
                  hashtag="#React"
                >
                  <FacebookIcon
                    iconFillColor="white"
                    round={true}
                    size={32}
                  ></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton
                  className="blog__social__share"
                  title="Let's cook together"
                  url="http://localhost:3000/"
                >
                  <WhatsappIcon
                    iconFillColor="white"
                    round={true}
                    size={32}
                  ></WhatsappIcon>
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
