import React, { useEffect, useState } from "react";
// import { useRef } from "react";
import "./Modal.css";

function Modal({
  modalVis,
  setModalVis,
  title,
  URL
}) {
  const [urlSource, setUrlSource] = useState(URL);
  useEffect(() => {
    const body = document.body;
    if (modalVis === "visible") {
      body.style.overflowY = "hidden";
      setUrlSource(URL);

    } else {
      body.style.overflowY = "auto";
      setUrlSource("");

    }
  }, [modalVis, URL]);

  return (
    <div>
      <div className={`modalParent ${modalVis}`}>
        <div className={`modalCustom ${modalVis}`}>
          <button
            className="modalClose"
            aria-label="Close Project Modal Box"
            onClick={() => {
              setModalVis("");
              setUrlSource("");
            }}
          >
            &times;
          </button>
          <h2>{title}</h2>
          <iframe 
              className="modalVideo"
              src={urlSource} 
              alt={title}               
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title={title} 
              ></iframe>
          <div className="modalButtons">
            <button
              className="modalButton"
              onClick={() => {
                setModalVis("");
                setUrlSource("");
              }}
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;