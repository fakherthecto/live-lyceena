import React, { useEffect } from "react";
import { useState } from "react";

const ZoomMeeting = () => {
  const [nameJ, setNameJ] = useState("Lyceena Teacher");
  const zoomMeetingUrl =
    "https://zoom.us/wc/86384306158/join?prefer=1&un=${nameJ}";
  //   useEffect(() => {
  //     const handleMessage = (event) => {
  //       if (event.origin === zoomMeetingUrl) {
  //         const iframeUrl = event.data;
  //         // Perform the desired action when the iframe URL changes
  //         console.log("Iframe URL changed:", iframeUrl);
  //         // React to the URL change in your application
  //       }
  //     };

  //     window.addEventListener("message", handleMessage);

  //     return () => {
  //       window.removeEventListener("message", handleMessage);
  //     };
  //   }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === "https://zoom.us") {
        const message = JSON.parse(event.data);
        if (
          message.method === "meetingStatus" &&
          message.status === "MEETING_ENDED"
        ) {
          // Perform the desired action when the meeting ends
          console.log("Meeting ended");
          // Redirect to another page, update state, etc.
          window.location.href = "https://lyceena.tn"; // Redirect to localhost:3000
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      {/* Other components */}
      <iframe
        title="Zoom Meeting"
        src={zoomMeetingUrl}
        allow="microphone; camera"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default ZoomMeeting;
