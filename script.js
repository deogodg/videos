<script>
   const videos = [
     { id: 'He1EBbeuEr0', title: 'Video 1', description: 'A Lenda da CRIATURA O RETORNO', link: 'https://www.youtube.com/watch?v=He1EBbeuEr0' },
     { id: 'fD9ojIhO8lA', title: 'Video 2', description: 'COISA ESTRANHA DENTRO DA IGREJA ASSOMBRADA', link: 'https://www.youtube.com/watch?v=fD9ojIhO8lA' },
     { id: 'LpuAW9ixcaM', title: 'Video 3', description: 'A LENDA DA CASA DA BRUXA', link: 'https://www.youtube.com/watch?v=LpuAW9ixcaM' },
     { id: 'feuMCTZcek0', title: 'Video 4', description: 'A Lenda do VELHO SATÂNICO (DEU RUIM)', link: 'https://www.youtube.com/watch?v=feuMCTZcek0' },
     { id: 'aKeybiSBxNU', title: 'Video 5', description: 'A LENDA DO OBSESSOR 2', link: 'https://www.youtube.com/watch?v=aKeybiSBxNU' },
     { id: '7J4gfo636TA', title: 'Video 6', description: 'A Lenda do APICULTOR 🐝', link: 'https://www.youtube.com/watch?v=7J4gfo636TA' },
     { id: 'hUi-Xp41lHU', title: 'Video 7', description: 'RESTAURANTE PARANORMAL', link: 'https://www.youtube.com/watch?v=hUi-Xp41lHU' },
     { id: '8lsWVC6U3go', title: 'Video 8', description: 'RESTAURANTE PARANORMAL 2 (O RETORNO) ', link: 'https://www.youtube.com/watch?v=8lsWVC6U3go' },
     { id: 'baRtHbDampI', title: 'Video 9', description: 'O LENHADOR ', link: 'https://www.youtube.com/watch?v=8lsWVC6U3go' },
     { id: '2XyZ2a8cB-I', title: 'Video 10', description: 'PASSAMOS UMA NOITE NA CASA ', link: 'https://www.youtube.com/watch?v=2XyZ2a8cB-I' },
   ];

   let currentIndex = 0;

   function changeVideo(index) {
     currentIndex = index;
     updateVideo();
   }

   function updateVideo() {
     const video = videos[currentIndex];
     const iframe = document.getElementById('videoPlayer');
     const description = document.getElementById('videoDescription');
     iframe.src = `https://www.youtube.com/embed/${video.id}?rel=0`;
     description.textContent = video.description; // Atualiza a descrição do vídeo
   }

   function previousVideo() {
     if (currentIndex > 0) {
       currentIndex--;
       updateVideo();
     }
   }

   function nextVideo() {
     if (currentIndex < videos.length - 1) {
       currentIndex++;
       updateVideo();
     }
   }

   function toggleFullscreen() {
     const iframe = document.getElementById('videoPlayer');
     if (iframe.requestFullscreen) {
       iframe.requestFullscreen();
     } else if (iframe.mozRequestFullScreen) { // Firefox
       iframe.mozRequestFullScreen();
     } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
       iframe.webkitRequestFullscreen();
     } else if (iframe.msRequestFullscreen) { // IE/Edge
       iframe.msRequestFullscreen();
     }
   }

   updateVideo();
 </script>
