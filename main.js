// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 5000);
//   };

  document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-music');
    
    // Function to unmute and play the audio
    const enableAudio = () => {
        audio.muted = false;
        audio.play().catch(error => console.log('Play failed:', error));
        document.removeEventListener('click', enableAudio); // Remove the listener after first use
    };

    // Handle the loading delay for content
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 5000); // Delay of 30 seconds

    // Listen for user interaction to unmute and play
    document.addEventListener('click', enableAudio);
});
