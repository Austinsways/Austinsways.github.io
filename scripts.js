

function onYouTubeIframeAPIReady() {
    
    // Create the YouTube video player
    new YT.Player('ChessSim', {
      width: '560',
      height: '315',
      videoId: 'iGrS947BRiQ',
      playerVars: {
        autoplay: 0, 
      },
    });
    new YT.Player('OrbitSim', {
        width: '560',
        height: '315',
        videoId: 'KVAivpUULtQ',
        playerVars: {
          autoplay: 0, 
        },
      });
    new YT.Player('Apollo11', {
        width: '560',
        height: '315',
        videoId: 'vnON9GPr6CM',
        playerVars: {
            autoplay: 0, 
        },
    });
    new YT.Player('GenomeDatabase', {
        width: '560',
        height: '315',
        videoId: 'VrF79ZdAoJ4',
        playerVars: {
            autoplay: 0, 
        },
    });
    new YT.Player('ButterflySim', {
        width: '560',
        height: '315',
        videoId: '7TtjbLm9VQE',
        playerVars: {
            autoplay: 0, 
        },
    });
  }