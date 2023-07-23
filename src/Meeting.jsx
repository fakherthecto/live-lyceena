import React, { Fragment, useEffect } from "react";

function Meeting({ payload, attendant }) {
  useEffect(async () => {
    let meetingSDKElement = document.getElementById("meetingSDKElement");
    // https://source.zoom.us/lib
    const { ZoomMtg } = await import("@zoomus/websdk");
    let zoomJSLib = "https://source.zoom.us/2.9.5/lib";
    let zoomJSAVLib = "/av";
    ZoomMtg.setZoomJSLib(zoomJSLib, zoomJSAVLib);
    // ZoomMtg.setZoomJSLib("https://source.zoom.us/lib", "av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    ZoomMtg.generateSDKSignature({
      meetingNumber: payload.meetingNumber,
      role: payload.role,
      sdkKey: payload.sdkKey,
      sdkSecret: payload.sdkSecret,
      success: function (signature) {
        ZoomMtg.init({
          leaveUrl: payload.leaveUrl,

          success: function (data) {
            ZoomMtg.join({
              meetingNumber: payload.meetingNumber,
              signature: signature.result,
              sdkKey: payload.sdkKey,
              userName: attendant,
              userEmail: payload.userEmail,
              passWord: payload.passWord,
              tk: "",

              success: function () {
                console.log("-- Joined --");
                console.log(signature);
              },
              error: function (error) {
                console.log(error);
              },
            });
          },
          error: function (error) {
            console.log(error);
          },
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  }, []);
  return <div></div>;
}

export default Meeting;
