import React from "react";
import ReactDOM from "react-dom";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import SimpleChat from "./simple-chat";
import users from "../../../data/users.json";

const pubnub = new PubNub({
  publishKey: "pub-c-a1f1dc6b-b802-413b-9d4f-31563c8a2e08",
  subscribeKey: "sub-c-299f0f32-9234-11ec-8158-ea060f348a12",
  //publishKey: import.meta.env.REACT_APP_PUB_KEY,
  //subscribeKey: import.meta.env.REACT_APP_SUB_KEY,
  uuid: users[Math.floor(Math.random() * users.length)].id,
});

ReactDOM.render(
  <React.StrictMode>
    <PubNubProvider client={pubnub}>
      <SimpleChat />
    </PubNubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
