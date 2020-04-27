import { Peer } from "protoo-client";

export default class Peers {
  store = window.STORE.getState();
  peers = [];
  activeSpeakerId = "";
  peersSpace = null;

  constructor() {
    window.STORE.subscribe(this.connectStore);
    this.peersSpace = document.getElementById("peers-space");
  }

  connectStore = (...rest) => {
    const { peers, room } = window.STORE.getState();

    this.peers = Object.values(peers) || [];
    this.activeSpeakerId = room.activeSpeakerId;

    console.log("*****rest", this.peers);
    this.setHTML();
  };

  setHTML = () => {
    const peersId = this.peers.map((p) => p.id);

    this.peers.map((p) => new PeerSingle(p));
  };
}

class PeerSingle {
  consumerId = "";
  constructor(peer) {
    window.STORE.subscribe(this.connectStore);
    this.consumerId = peer.id;
  }
  connectStore = () => {
    const consumersArray = peer.consumers.map(
      (consumerId) => state.consumers[consumerId]
    );
    const audioConsumer = consumersArray.find(
      (consumer) => consumer.track.kind === "audio"
    );
    const videoConsumer = consumersArray.find(
      (consumer) => consumer.track.kind === "video"
    );
  };
}
