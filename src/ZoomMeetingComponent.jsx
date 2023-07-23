import React from "react";

const ZoomMeetingComponent = () => {
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

  return (
    <div>
      <iframe
        title="Zoom Meeting"
        src={embeddedUrl}
        width="100%"
        height="700px"
        frameBorder="0"
        allow="microphone; camera"
      ></iframe>
    </div>
  );
};

export default ZoomMeetingComponent;
