const synth = {
  volume: -20,
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
    type: 'sawtooth',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const autoFilter = {
  wet: 0.3,
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

const autoWah = {
  wet: 0.3,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}

const distortion = {
  wet: 0.1,
  distortion: 0,
  oversample: '4x'
}



const sequence = {
  steps: [
  {
    time: '0:0:0',
    noteName: 'C2',
    duration: '1n',
    velocity: 1
  },
  {
    time: '1:0:0',
    noteName: 'A2',
    duration: '1n',
    velocity: 1
  },
  {
    time: '2:0:0',
    noteName: 'E2',
    duration: '1n',
    velocity: 1
  },
  {
    time: '0:3:0',
    noteName: 'G2',
    duration: '1n',
    velocity: 1
  },
], 
  duration: '1m'
}

export { synth, autoFilter, autoWah, distortion, sequence }

