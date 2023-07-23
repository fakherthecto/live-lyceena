import React from "react";
import { useEffect, useState } from "react";
import Meeting from "./Meeting";
import "./zoom.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function LandingPage() {
  const [message, setMessage] = useState("");
  const [payload, setPayload] = useState({});
  const [response, setResponse] = useState([]);
  const { idLive, role, attendant } = useParams();
  //   useEffect(() => {
  //     fetch("http://localhost:3000/api/users/message")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPayload(data.payload);
  //         setMessage(data.message);
  //       });
  //   }, []);

  useEffect(() => {
    // POST request using axios with set headers
    // var referrer = document.referrer;
    // console.log("referrer url", document.referrer);
    // alert("jj");
    const liveInfo = { idLive: idLive, role: 0 };
    // alert(idLive);

    axios
      .post("https://lyceena.tn/api/users/getLive", liveInfo)
      .then((response) => {
        console.log(response);
        setPayload(response.data.payload);
      });
  }, []);

  return (
    <>
      <iframe src="https://example.com/videosdk" allow="camera; microphone">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col text-center">
              {/* <button onClick={() => console.log(response)}>payload</button>
              <h1 style={{ zIndex: 99999 }}>Hello</h1> */}
              <img
                src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                alt=""
              />
              {payload?.meetingNumber && (
                <>
                  <h1 style={{ zIndex: 99999 }}>Hello</h1>
                  <Meeting payload={payload} attendant={attendant} />
                </>
              )}
            </div>
          </div>
        </div>
      </iframe>
    </>
  );
}

export default LandingPage;
