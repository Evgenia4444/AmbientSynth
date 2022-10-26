import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_ToneSynth from './modules/ToneSynth'
import * as bassSettings from './tunes/Bass'
import * as melodySettings from './tunes/Melody'
import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'


//Name space
let bassSynth
let bassChorus
let bassPingPongDelay

let melodySynth
let melodyChorus
let melodyPingPongDelay

export default class Container extends Component {
  constructor(props) {
    super(props)

   
    this.state = {
      bassSettings,
      melodySettings
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings } = this.state

//BASS
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    bassSynth.chain(bassChorus, bassPingPongDelay)



    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true
//

//MELODY
melodySynth = new Tone.Synth(melodySettings.synth)
melodyChorus = new Tone.Chorus(melodySettings.chorus).start()

melodyPingPongDelay = new Tone.PingPongDelay(
  bassSettings.pingPongDelay
).toDestination()

melodySynth.chain(melodyChorus, melodyPingPongDelay)



const melodyPart = new Tone.Part((time, note) => {
  melodySynth.triggerAttackRelease(
    note.noteName,
    note.duration,
    time,
    note.velocity
  )
}, melodySettings.sequence.steps).start(0)

melodyPart.loopEnd = melodySettings.sequence.duration
melodyPart.loop = true
//

    
    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings} = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    }

    this.setState({
     bassSettings
    })
  }


  handleMelodyValueChange = (property, value) => {
    const { melodySettings} = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    }

    this.setState({
     melodySettings
    })
  }

  render() {
    const { bassSettings, melodySettings } = this.state



    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleStart}
        />

       <SC_ToneSynth settings={bassSettings} handleValueChange={this.handleBassValueChange} />

        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={bassSettings.pingPongDelay.wet}
          property="pingPongDelayWet"
          handleChange={this.handleValueChange}
        />

        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={bassSettings.chorus.wet}
          property="chorusWet"
          handleChange={this.handleValueChange}
        />

        <SC_ToneSynth 
          settings={melodySettings} 
          handleValueChange={this.handleMelodyValueChange} 
        />
      </div>
    )
  }
}