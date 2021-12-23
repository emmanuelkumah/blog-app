import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="subFooter">
        <div className="subFooter_details">
          <h3>Join the blogging community</h3>
          <Link to="/login">
            <button className="btn__footer">Get Started</button>
          </Link>
        </div>
      </section>
      <section className="footer">
        <p>Copyright. All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
