import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { useState } from "react";

export function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const handleOnChange = (e) => {
    setToken(e.target.value)
    localStorage.setItem('token', e.target.value)
  }
  return (
    <div>
      <input onChange={handleOnChange} value={token} placeholder="Paste token here" style={{width: '100%', backgroundColor: '#ccc'}} autoComplete="token"></input>
    <LiveKitRoom
      token={token}
      serverUrl="wss://ayman-ui68sq9r.livekit.cloud"
      connect={true}
      video={true}
    >
      <VideoConference />
    </LiveKitRoom>
    </div>

  );
}

export default App;
