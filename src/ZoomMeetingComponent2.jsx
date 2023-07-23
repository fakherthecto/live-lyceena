import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";

const ZoomMeetingComponent2 = () => {
  const zoomWebClientUrl =
    "https://zoom.us/wc/{ROOM_NAME}/join?prefer=1&un={YOUR_USERNAME}&pwd={MEETING_PASSWORD}&jwt={ACCESS_TOKEN}";

  // Replace the placeholders with actual values
  const roomName = "88168151831";
  const userName = "Lyceena Teacher";
  const meetingPassword = "505570";
  const accessToken =
    "eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjZiMTQyOGMzLWQ0ZTQtNDgzYy04OGUxLWU5ZDQzNTkxNmNkMSJ9.eyJ2ZXIiOjksImF1aWQiOiJjMTZhM2JjMDU4MWI0M2Y1ZDhlNDIxMGQ4MzAwMGJhYiIsImNvZGUiOiJ2OHdma0RlQjV2NXhpQ185ZFVxU2M2ckJ4LUluWVlQLXciLCJpc3MiOiJ6bTpjaWQ6U2xrZjJreF9UUVdXamw5QjhNQ09sZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJTM1VqVF9IY1RCNlFSeF8takZ4eGV3IiwibmJmIjoxNjg1MzQ4NDY5LCJleHAiOjE2ODUzNTIwNjksImlhdCI6MTY4NTM0ODQ2OSwiYWlkIjoiN1VxX1g2NmlTUkdMLXpJREtGYlVQdyJ9.aWkG4jbwtm72QtSX_qjlJjt4xl2ntpPFzp4MDVPDz451-KIDMWENn_HbOagcKljQHIO60Xedlub0awOwRYbc-g";

  const embeddedUrl = zoomWebClientUrl
    .replace("{ROOM_NAME}", roomName)
    .replace("{YOUR_USERNAME}", userName)
    .replace("{MEETING_PASSWORD}", meetingPassword)
    .replace("{ACCESS_TOKEN}", accessToken);

  useEffect(() => {
    // Initialize the ZoomMtg library
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.0/lib", "/av"); // Replace with the appropriate ZoomMtg library URL
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    // Join the meeting
    const joinMeeting = async () => {
      //   const response = await fetch('/your-backend-endpoint-to-generate-join-url');
      //   const { joinUrl, signature } = await response.json();

      const joinUrl =
        "https://zoom.us/j/88168151831?role=0&signature=FertWW4FblICusvNVP6p%2F8okqEuFZqts422w2YGyrIg%3D";
      const signature = "FertWW4FblICusvNVP6p/8okqEuFZqts422w2YGyrIg=";

      ZoomMtg.init({
        leaveUrl: "https://lyceena.tn",
        success: (success) => {
          ZoomMtg.join({
            meetingNumber: "88168151831",
            userName: "Lyceena Teacher",
            signature,
            apiKey: "",
            passWord: "505570",
            success: (success) => {
              console.log("Meeting joined successfully");
            },
            error: (error) => {
              console.error(error);
            },
          });
        },
        error: (error) => {
          console.error(error);
        },
      });
    };

    joinMeeting();
  }, []);

  return (
    <div>
      <div id="zmmtg-root"></div>
      <div id="zmmtg-root-fully"></div>
    </div>
  );
};

export default ZoomMeetingComponent2;
