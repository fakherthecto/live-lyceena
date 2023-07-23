import React from "react";
import { useEffect, useState } from "react";
import Meeting from "./Meeting";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfLivePage() {
  const [message, setMessage] = useState("");
  const [payload, setPayload] = useState({});
  const [response, setResponse] = useState([]);
  const { idLive, role } = useParams();

  useEffect(() => {
    // POST request using axios with set headers
    const liveInfo = { idLive: idLive, role: 1 };
    // alert(idLive);

    // var referrer = document.referrer;
    // console.log("referrer url", document.referrer);
    var referrer = document.referrer;
    console.log("referrer url", referrer);

    axios
      .post("https://lyceena.tn/api/users/getLive", liveInfo)
      .then((response) => {
        console.log(response);
        setPayload(response.data.payload);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            {/* <button onClick={() => console.log(response)}>payload</button>
            <h1 style={{ zIndex: 99999 }}>Hello</h1> */}
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt=""
            />
            {payload?.meetingNumber && (
              <>
                {/* <h1 style={{ zIndex: 99999 }}>Hello</h1> */}
                <Meeting payload={payload} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfLivePage;
