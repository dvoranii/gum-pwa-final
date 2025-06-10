const playSound = (soundFile:string) => {
  const audio = new Audio(soundFile);
  audio.volume = 0.015;
  audio.play().catch((e: Error) => console.log("Audio play failed:", e));
};

export default playSound;