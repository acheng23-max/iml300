
let danceVideo;

function setup() {
  noCanvas();

  danceVideo = createVideo(
    "assets/dance-background.mp4"
  );

  // Put video inside the dance visual container
  danceVideo.parent("dance-video-container");

  danceVideo.addClass("p5-dance-video");

  // Video settings
  danceVideo.elt.muted = true;
  danceVideo.elt.defaultMuted = true;
  danceVideo.elt.autoplay = true;
  danceVideo.elt.loop = true;
  danceVideo.elt.playsInline = true;

  danceVideo.attribute("muted", "");
  danceVideo.attribute("playsinline", "");
  danceVideo.attribute("preload", "auto");

  danceVideo.elt.controls = false;

  // Play when ready
  danceVideo.elt.addEventListener("loadeddata", () => {
    console.log("Dance video loaded!");

    danceVideo.elt.play().catch(error => {
      console.log("Playback blocked:", error);
    });
  });

  danceVideo.elt.addEventListener("error", () => {
    console.error(
      "Dance video failed:",
      danceVideo.elt.error
    );
  });

  danceVideo.elt.load();
}
