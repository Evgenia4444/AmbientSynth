
const autoWah = {
  wet: 0.3,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}

const sequence = {
    steps: [
    {
      time: '0:1:0',
      noteName: 'A3',
      duration: '4m',
      velocity: 1
    }
 
  ], 
    duration: '4m'
  }



  export { autoWah, sequence }