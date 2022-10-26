import React, { Component } from 'react'
import * as Tone from 'tone'


import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const synthSettings = {
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
        type: 'fattriangle',
        modulationType: 'triangle',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }



    //EFFECTS SETTINGS
    const distortionSettings = {
      wet: 0,
      distortion: 0,
      oversample: '4x'
    }

    const autoFilterSettings = {
      wet: 0,
      type: 'triangle',
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

    // const jcReverbSettings = {
    //   wet: 1,
    //   roomSize: 0.3
    // }
    const pingPongDelaySettings = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }


    const chebyshevSettings = {
      wet: 0,
      order: 50,
      oversample: 'none'
    }

    const phaserSettings = {
      wet: 0,
      frequency: 0.5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    }
    
    const chorusSettings = {
      wet: 0,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    }

    const channelSettings = {
      volume: -6,
      pan: 0,
      mute: false,
      solo: false
    }
    const tremoloSettings = {
      wet: 0,
      frequency: 10,
      type: 'triangle',
      depth: 0.5,
      spread: 100
    }

    const vibratoSettings = {
      wet: 0,
      maxDelay: 0.005,
      frequency: 5,
      depth: 0.1,
      type: 'sine'
    }

  //EFFECTS
  const distortion = new Tone.Distortion(distortionSettings)
  const autoFilter = new Tone.AutoFilter(autoFilterSettings)
  // const jcReverb = new Tone.JCReverb(jcReverbSettings)
  const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings)
  const chebyshevNode = new Tone.Chebyshev(chebyshevSettings)
  const phaser = new Tone.Phaser(phaserSettings)
  const chorus = new Tone.Chorus(chorusSettings)
  const channel = new Tone.Channel(channelSettings)
  const tremolo = new Tone.Tremolo(tremoloSettings)
  const vibrato = new Tone.Vibrato(vibratoSettings)

  //SYNTH SETTINGS
  const synth = new Tone.Synth(synthSettings)

  
  //CHAIN
  synth.chain(vibrato, Tone.Destination)
  



  //MELODY
  const sequence = [
    //0
    {
      time: '0:0:0',
      noteName: 'A3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },


    //1
    {
      time: '0:3:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'A3',
      duration: '8n',
      velocity: 1
    },

    //2 
    {
      time: '1:1:0',
      noteName: 'B3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
  ]


    // Создаём партию, добавляем в неё секвенцию
    // и включаем проигрывание
    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence).start(0)

    // Указываем длительность партии
    part.loopEnd = '3m'

    // Включаем зацикливание
    part.loop = true

    // Включаем звук в браузере
    // sampler.context.resume()

    // Включаем отсчёт времени в Tone.js
    Tone.Transport.start()
  
}
  render() {
    return (
      <div className="Container">
        <SC_Button
          text="Art Desig Coding Community"
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}