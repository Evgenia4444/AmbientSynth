const synth = {
  volume: -10,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sine',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const distortion= {
  wet: 0.3,
  distortion: 0,
  oversample: '4x'
}

const autoWah = {
  wet: 0.6,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}

const autoFilter = {
  wet: 0.6,
  type: 'sine',
  frequency: 1,
  depth: 1,
  baseFrequency: 200,
  octaves: 2.6,
  filter: {
    type: 'lowpass',
    frequency: 100,
    rolloff: -12,
    Q: 1
  }
}

const stereoWidener = {
  wet: 0.2,
  width: 0.5
}

const tremolo = {
  wet: 0.1,
  frequency: 10,
  type: 'sine',
  depth: 0.5,
  spread: 180
}

const pitchShift = {
  wet: 0.1,
  pitch: 0,
  windowSize: 0.1,
  delayTime: 0,
  feedback: 0
}


const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'F5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '0:2:0',
      noteName: 'F4',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '0:3:0',
      noteName: 'A4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'E5',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '1:1:0',
      noteName: 'A4',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '1:2:0',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '1:3:0',
      noteName: 'A4',
      duration: '4n',
      velocity: 1
    },    
    {
      time: '2:0:0',
      noteName: 'C5',
      duration: '4n',
      velocity: 1
    },    
    {
      time: '2:1:0',
      noteName: 'B4',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '2:3:0',
      noteName: 'C5',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '3:0:0',
      noteName: 'B4',
      duration: '4n',
      velocity: 1
    },    
    {
      time: '3:1:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '3:2:0',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    }, 
    {
      time: '3:3:0',
      noteName: 'A4',
      duration: '4n',
      velocity: 1
    }, 
    
   

], 
  duration: '4m'
}

export { synth, distortion, autoWah, autoFilter, stereoWidener, tremolo, pitchShift, sequence }