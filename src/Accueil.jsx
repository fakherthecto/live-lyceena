import React from "react";
import JoinMeeting from "./JoinMeeting";
import "./zoom.css";
function Accueil() {
  return (
    // <div>
    //   {/* <h1>My React App</h1> */}
    //   {/* <iframe
    //     allow="camera; microphone; fullscreen; display-capture; autoplay"
    //     src="https://meet.jit.si/room202305"
    //     style={{ height: "500px", width: " 100%", border: "0px" }}
    //   ></iframe> */}
    //   {/* <ZoomMeetingComponent3 /> */}
    //   {/* <JoinMeeting /> */}
    //   <h1>Merci de votre attention</h1>
    // </div>

    <div className="container" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="centered">
        <img
          src="https://res.cloudinary.com/lyceena/image/upload/v1658131264/2_wjpsgc.png"
          alt="Logo"
          className="logo"
        />
        <p className="paragraph">
          <strong style={{ fontSize: "85px", color: "#002333" }}>
            &#x2764; ربي ينجحك
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Accueil;
