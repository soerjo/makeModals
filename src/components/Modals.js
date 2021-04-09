import React, { useState } from "react";
import "./Modals.css";

function Modals() {
  let [toggle, setToggle] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handletoggle = () => {
    if (!toggle) {
      setToggle((toggle = !toggle));
      setTimeout(() => {
        setAnimation(!animation);
        console.log(animation);
      }, 300);
    } else {
      setAnimation(!animation);
      console.log(animation);
      setTimeout(() => {
        setToggle((toggle = !toggle));
      }, 300);
    }
  };
  return (
    <>
      <button onClick={handletoggle} style={{ margin: "20px" }}>
        sebuah tombol
      </button>
      {toggle && (
        <div className="modal-layout">
          <div
            className="backdropBlack"
            style={{
              opacity: animation ? "1" : "0",
              pointerEvents: toggle ? "auto" : "none",
            }}
            onClick={handletoggle}
          />
          <div
            className="card"
            style={{
              opacity: animation ? "1" : "0",
            }}
          >
            <div className="header">
              <h3>Header</h3>
              <h3 style={{ cursor: "pointer" }} onClick={handletoggle}>
                x
              </h3>
            </div>
            <div className="content">
              <h2>Modal</h2>
              <p>
                hanyalah sebuah kumpulan kata kata yang harus kamu ketahu dan
                kalo ndak mau di ketahui juga ndak papa
              </p>
            </div>
            <div className="button">
              <button onClick={handletoggle}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modals;
