import React from "react";
import "../css/Blog.css";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

function Blog({ postLists }) {
  return (
    <div className="post__cards">
      {postLists.map((post) => (
        <div key={post.id} className="post__card__item">
          <article>
            <div className="card">
              <div class="card__cover">
                <p>Image goes here</p>
              </div>

              <div class="card__content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>{post.date}</p>
                <p>@{post.author.name}</p>
              </div>
            </div>
          </article>

          <div>
            <hr className="blog__hr" />
            <div className="social__container">
              <FacebookShareButton
                className="blog__social__share"
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
  );
}

export default Blog;
