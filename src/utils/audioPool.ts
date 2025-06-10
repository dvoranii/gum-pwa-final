import navTapSound from '../assets/sounds/tapside.mp3';

type SoundName = 'navTap';

class AudioPool {
  private pools: Record<SoundName, HTMLAudioElement[]> = {
    navTap: [],
  };

  private soundUrls: Record<SoundName, string> = {
    navTap: navTapSound,
  };

  private isInitialized = false;

  initialize() {
    if (this.isInitialized) return;
    
    (Object.keys(this.soundUrls) as SoundName[]).forEach(soundName => {
      this.pools[soundName] = this.createPool(soundName, 
        soundName === 'navTap' ? 3 : 1 
      );
    });
    
    this.isInitialized = true;
  }

  private createPool(soundName: SoundName, size: number): HTMLAudioElement[] {
    return Array.from({ length: size }, () => {
      const audio = new Audio(this.soundUrls[soundName]);
      audio.load();
      audio.volume = 0.5; 
      return audio;
    });
  }

  play(soundName: SoundName) {
    if (!this.isInitialized) {
      console.warn('Audio not initialized - call initialize() after user interaction');
      const audio = new Audio(this.soundUrls[soundName]);
      audio.play().catch(() => {});
      return;
    }
    
    const pool = this.pools[soundName];
    const audio = pool.find(a => a.paused) || pool[0];
    audio.currentTime = 0;
    
    audio.play().catch(e => {
      console.error(`${soundName} play failed:`, e);
      new Audio(this.soundUrls[soundName]).play().catch(() => {});
    });
  }
}

export const audioPool = new AudioPool();