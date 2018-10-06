const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "매일 그대와 (每天和你)",
        artist: 'IU',
        url: '/music/매일 그대와 (每天和你).mp3',
        cover: '/images/iu.jpg',
      },
      {
        name: 'Alawys',
        artist: '尹美莱',
        url: '/music/ALWAYS.mp3',
        cover: '/images/ss.jpg',
      }
    ]
});