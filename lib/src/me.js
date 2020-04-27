export default class Me {
  me = null;
  store = window.STORE.getState();
  videoTrack = null;

  constructor() {
    const that = this;
    this.me = document.getElementById("mine-video");
    this.sethtml();
    

    var track = setInterval(() => {
      var producersArray =
        Object.values(window.STORE.getState().producers) || [];

      var videoProducer = producersArray.find(
        (producer) => producer.track.kind === "video"
      );

      const audioProducer = producersArray.find(
        (producer) => producer.track.kind === "audio"
      );

      if (
        videoProducer &&
        videoProducer.track &&
        audioProducer &&
        audioProducer.track
      ) {
        clearInterval(track);
      }

      if (videoProducer && videoProducer.track) {
        const stream = new MediaStream();
        stream.addTrack(videoProducer.track);
        that.videoElem.srcObject = stream;
      }

      if (audioProducer && audioProducer.track) {
        const stream = new MediaStream();
        stream.addTrack(audioProducer.track);
        that.audioElem.srcObject = stream;
      }
    }, 1000);
  }

  sethtml = () => {
    if (this.me) {
      var div = document.createElement("div");
      this.videoElem = document.createElement("video");
      this.audioElem = document.createElement("audio");

      this.videoElem.autoplay = true;
      this.videoElem.muted = true;
      this.videoElem.controls = false;

      this.audioElem.autoPlay = true;
      this.audioElem.muted = true;
      this.audioElem.controls = false;

      this.me.append(this.videoElem);
      this.me.append(this.audioElem);
    }
  };
}
