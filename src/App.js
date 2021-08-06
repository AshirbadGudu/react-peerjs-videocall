import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";
import "./App.css";
const YOUR_RANDOM_ID = `id-${parseInt(Math.random() * 100)}`;
const MEDIA_STREAM_CONSTRAINTS = {
  video: true,
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
  },
};
function App() {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const inputVideoRef = useRef();
  const startVideoCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        MEDIA_STREAM_CONSTRAINTS
      );
      addLocalVideo(stream);
      let call = peerRef.current.call(inputVideoRef.current.value, stream);
      call.on("stream", (remoteStream) => addRemoteVideo(remoteStream));
    } catch (error) {
      console.log(error);
    }
  };
  const [peerID, setPeerID] = useState("");
  const [isOnCall, setIsOnCall] = useState(false);
  const peerRef = useRef();

  // Create Receive Function
  const receiveCall = async (call) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        MEDIA_STREAM_CONSTRAINTS
      );
      addLocalVideo(stream);
      call.answer(stream);
      call.on("stream", (remoteStream) => addRemoteVideo(remoteStream));
    } catch (error) {
      console.log(error);
    }
  };

  // Create Remote Stream Video
  const addRemoteVideo = (remoteStream) => {
    remoteVideoRef.current.srcObject = remoteStream;
    setIsOnCall(true);
  };

  // Create local Stream Video
  const addLocalVideo = (localStream) =>
    (localVideoRef.current.srcObject = localStream);

  // Stop Video Call
  const endVideoCall = () => {
    const localTracks = localVideoRef.current.srcObject.getTracks();
    localTracks.forEach((track) => track.stop());
    const remoteTracks = localVideoRef.current.srcObject.getTracks();
    remoteTracks.forEach((track) => track.stop());
    localVideoRef.current.srcObject = null;
    remoteVideoRef.current.srcObject = null;
    setIsOnCall(false);
  };

  useEffect(() => {
    peerRef.current = new Peer(YOUR_RANDOM_ID);
    // Listen Peer Open Event
    peerRef.current.on("open", (id) => {
      setPeerID(id);
    });
    // Listen Peer Call Event
    peerRef.current.on("call", receiveCall);
    return () => {};
  }, []);

  const copyOnClipboard = (txt) => navigator.clipboard.writeText(txt);
  return (
    <div className="App">
      <header>
        <h2>Your Video Call id: {peerID}</h2>
        <button
          onClick={() => {
            copyOnClipboard(peerID);
          }}
        >
          copy
        </button>
      </header>
      <main>
        <video ref={localVideoRef} autoPlay></video>
        <video ref={remoteVideoRef} autoPlay></video>
      </main>
      <footer>
        <input type="text" ref={inputVideoRef} />
        {isOnCall ? (
          <button className="end" onClick={endVideoCall}>
            End Call
          </button>
        ) : (
          <button className="start" onClick={startVideoCall}>
            Call
          </button>
        )}
      </footer>
    </div>
  );
}

export default App;
