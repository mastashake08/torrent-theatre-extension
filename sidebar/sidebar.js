const client = new WebTorrent();
const videoPlayer = document.getElementById("videoPlayer");

document.getElementById("startStream").addEventListener("click", () => {
  const magnetLink = document.getElementById("magnetLink").value;
  if (magnetLink) {
    client.add(magnetLink, (torrent) => {
      const file = torrent.files.find(f => f.name.endsWith(".mp4")); // Adjust for supported file types
      file.renderTo(videoPlayer, { autoplay: true });
    });
  }
});

document.getElementById("seedButton").addEventListener("click", () => {
  const fileInput = document.getElementById("uploadTorrent");
  const file = fileInput.files[0];
  if (file) {
    client.seed(file, (torrent) => {
      alert(`Seeding: ${torrent.magnetURI}`);
    });
  }
});
