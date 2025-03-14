import React from "react";
import "./Home.css"; // Create this file for styling

const Home = () => {
  return (
    <section className="home">
      <button className="sign-up">Sign Up</button>
      <h1 className="headline">
        Dive into the world of books and let your imagination soar!
      </h1>
      <h5 className="subhead">Discover, Read, and Enjoy</h5>
      <div className="buttons">
        <button className="reader-btn">Reader</button>
        <button className="writer-btn">Writer</button>
      </div>
      <img src="assets/book.png" className="main-img" alt="book" />
    </section>
  );
};

export default Home;
