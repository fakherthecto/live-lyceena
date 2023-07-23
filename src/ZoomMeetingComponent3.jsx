import React, { useEffect } from "react";
// import { ZoomMtg } from "@zoomus/websdk";
import axios from "axios";
// import "./zoom.css";
const ZoomMeetingComponent3 = () => {
  useEffect(async () => {
    const { ZoomMtg } = await import("@zoomus/websdk");
    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.6.0/lib", "/av"); // Replace with the appropriate ZoomMtg library URL
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    const joinMeeting = async () => {
      try {
        axios
          .get("http://localhost:3000/api/zoom/meetings/82646860067/join", {
            headers: {
              Authorization: `Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImRlMjkzMDE4LWExNDUtNGU4OS05YjI2LWQxMmM1N2FmZjVmYyJ9.eyJ2ZXIiOjksImF1aWQiOiJjMTZhM2JjMDU4MWI0M2Y1ZDhlNDIxMGQ4MzAwMGJhYiIsImNvZGUiOiJDZzQwTVJXWkh2bDl3dUhEMzl6UjZhZDh4Umc4c3l5TlEiLCJpc3MiOiJ6bTpjaWQ6U2xrZjJreF9UUVdXamw5QjhNQ09sZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJTM1VqVF9IY1RCNlFSeF8takZ4eGV3IiwibmJmIjoxNjg1NDQ2ODE3LCJleHAiOjE2ODU0NTA0MTcsImlhdCI6MTY4NTQ0NjgxNywiYWlkIjoiN1VxX1g2NmlTUkdMLXpJREtGYlVQdyJ9.J-e4KhJmt3bUFA3OFNHISAqvZDtr6yutlCawfOCaKkw-42QCBeSd_N6xTZkifT18_re_1uuJf0ARf91sqaUJew`,
            },
          })
          .then(async (response) => {
            console.log(response);

            ZoomMtg.init({
              leaveUrl: "https://lyceena.tn",
              isSupportAV: true,
              success: (success) => {
                console.log(success);
                console.log(response.data.meetingNumber);
                console.log(response.data.password);
                console.log(response.data.signature);
                ZoomMtg.join({
                  meetingNumber: response.data.meetingNumber,
                  userName: "Lyceena Teacher",
                  signature: response.data.signature,
                  passWord: response.data.password,
                  apiKey: "otqJMke7QOSVb-Aao2hyhQ",
                  // sdkKey: "",
                  // success: (success) => {
                  //   console.log("Meeting joined successfully");
                  // },
                  // error: (error) => {
                  //   console.error("Error joining meeting:", error);
                  // },
                });
                console.log("Meeting joined successfully");
              },
              error: (error) => {
                console.error("Error initializing Zoom SDK:", error);
              },
            });
          });

        // Replace 'YOUR_ACCESS_TOKEN', 'YOUR_MEETING_ID', and 'YOUR_NAME' with the actual values
        // const response = await fetch(`/api/zoom/meetings/88168151831/join`, {
        //   headers: {
        //     Authorization: `Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6Ijk2Njc1NmFmLWI3YTUtNDMzYi05NjljLTVjN2ZiZTI3M2M2NCJ9.eyJ2ZXIiOjksImF1aWQiOiJjMTZhM2JjMDU4MWI0M2Y1ZDhlNDIxMGQ4MzAwMGJhYiIsImNvZGUiOiJGWHo3d1Fob2VLR0dodElBdUNzU3A2U19pWjBnT200aVEiLCJpc3MiOiJ6bTpjaWQ6U2xrZjJreF9UUVdXamw5QjhNQ09sZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJTM1VqVF9IY1RCNlFSeF8takZ4eGV3IiwibmJmIjoxNjg1MzUzMzk1LCJleHAiOjE2ODUzNTY5OTUsImlhdCI6MTY4NTM1MzM5NSwiYWlkIjoiN1VxX1g2NmlTUkdMLXpJREtGYlVQdyJ9.ZRLvzCDxON--w7t5Ct5fkPTSnKK3_mESjCCPlNbOO5wynYNBXhX5wV2Ly1uWwMpoF2jUqIeMKdc7rNcP_lrY7Q`,
        //   },
        // });
      } catch (error) {
        console.error("Error fetching meeting details:", error);
      }
    };

    joinMeeting();
  }, []);

  return <div></div>;
};

export default ZoomMeetingComponent3;
