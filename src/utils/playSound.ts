let lastPlayTime = 0;

const playSound = (soundFile: string) => {
  const now = Date.now();
  if (now - lastPlayTime < 50) return; 
  
  lastPlayTime = now;
  const audio = new Audio(soundFile);
  audio.volume = 0.05;
  audio.play().catch((e: Error) => console.log("Audio play failed:", e));
  
  // iOS workaround - force volume reset
  setTimeout(() => {
    audio.volume = 0.015;
  }, 10);
};

export default playSound;