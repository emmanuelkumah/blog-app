import React from "react";
import "../css/Features.css";

function Features({ id }) {
  return (
    <div>
      <section className="features__section" id={id}>
        <div className="features__heading">
          <h2 className="features__title">Blogging Done Right</h2>
          <p>Find audience, educate and grow </p>
        </div>

        <div className="cards">
          <div className="cards__item ">
            <div>
              <div className="card__cover">
                <img className="card__img" src="/images/blog1.png" alt="Blog" />
              </div>
              <h3 className="card__title">Helping Hand</h3>
              <p className="card__content">
                Write in depth articles that helps solve someone's nightmare
              </p>
            </div>
          </div>
          <div className="cards__item">
            <div>
              <div className="card__cover">
                <img className="card__img" src="/images/blog1.png" alt="Blog" />
              </div>

              <h3 className="card__title">Find Audience</h3>

              <p className="card__content">
                Instantly find audience for your next article as soon as you
                post
              </p>
            </div>
          </div>
          <div className="cards__item ">
            <div>
              <div className="card__cover">
                <img className="card__img" src="/images/blog1.png" alt="Blog" />
              </div>
              <h3 className="card__title">Create Memories</h3>
              <p className="card__content">
                Write for your future self, you can come back to it when you
                need to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
