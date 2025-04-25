import { useState, useEffect } from "react";
import "../styles/Home.css";
import folder from "../styles/folder.svg";
import folderOpen from "../styles/folder-open.svg";
import contact from "../styles/contact.svg";
import contactBack from "../styles/contact-back.svg";
import portfolio from "../styles/class-prtflo.jpg";
import { Worker, Viewer } from "@react-pdf-viewer/core";

function Home() {
  const [showPortfolioWindow, setShowPortfolioWindow] = useState(false);

  return (
    <>
      <div className="home">
        <Name />
        <Portfolio setShowPortfolioWindow={setShowPortfolioWindow} />
        {showPortfolioWindow && (
          <PortfolioWindow
            pdfUrl={"/class prtflo.pdf"}
            title="PORTFOLIO"
            setShowPortfolioWindow={setShowPortfolioWindow}
          />
        )}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function Name() {
  return (
    <div className="name-container">
      <p className="name">Julien</p>
      <p className="name">Mainolfi-Conde</p>
    </div>
  );
}
function Portfolio({ setShowPortfolioWindow }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="portfolio-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* {hover ? (
        <img
          src={folderOpen}
          alt="Folder-Open"
          className="portfolio-open-img"
        />
      ) : (
        <img src={folder} alt="Folder" className="portfolio-img" />
      )} */}
      <h1
        className="portfolio-txt"
        onClick={() => setShowPortfolioWindow(true)}
      >
        portfolio
      </h1>

      <h2 className="cv-txt">CV</h2>
    </div>
  );
}
function PortfolioWindow({ pdfUrl, title, setShowPortfolioWindow }) {
  return (
    <div className="pdf-window">
      <div className="window-header">
        <p className="window-title">{title}</p>
        <button
          className="close-button"
          onClick={() => setShowPortfolioWindow(false)}
        >
          ✖️
        </button>
      </div>
      <div className="window-content">
        <img className="full-portfolio" src={portfolio} alt="Portfolio" />
      </div>
    </div>
  );
}
function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="contact-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <img
        src={contactBack}
        alt="Contact-Background"
        className="contact-back-img"
      /> */}
      <div className="contact-content">
        <img src={contact} alt="Contact" className="contact-img" />
        <p className="contact-txt">julienmainolficonde@gmail.com</p>
      </div>
      {/* {hover ? (
            <img src={contact} alt="Contact" className="contact-open-img" />
        ) : (
            
        )} */}
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-text">ig @jeedieweedies</h2>
    </div>
  );
}
export default Home;
