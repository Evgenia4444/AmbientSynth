import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass'
import * as melodySettings from './tunes/melody'
import * as drumsSettings from './tunes/drums'

import ToneSynth from './modules/ToneSynth'
import CalmSounds from './modules/CalmSounds'
import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'


let bassSynth
let bassAutoWah//namepspace bass

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

    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)
    // bassChorus = new Tone.Chorus(bassSettings.chorus).start()

    // bassPingPongDelay = new Tone.PingPongDelay(
    //   bassSettings.pingPongDelay
    // ).toDestination()

    bassAutoWah = new Tone.AutoWah(bassSettings.autoWah)
    bassSynth.chain(bassAutoWah)

    

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
    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()

    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
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
    //


    const sampler = new Tone.Sampler({
      urls: {
        A1: "00001-Linn-9000-BassDrumrum1.mp3",   
        A2: "00017-Linn-9000-Snare.mp3",
        A3: "vinyl-hiss-5862.mp3",
        A4: "piano-loop-10809.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
     
    }).toDestination();

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequence.steps).start(0)

    drumsPart.loopEnd = drumsSettings.sequence.duration
    drumsPart.loop = true
    //


    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    }else if (property === 'autoWahWet') {
      bassAutoWah.wet.value = value
      bassSettings.autoWah.wet = value
    } 

    this.setState({
      bassSettings
    })
  }


  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    
    }

    this.setState({
      melodySettings
    })
  }


  render() {
    const { bassSettings, melodySettings } = this.state


    return (
      <div className="Container">

        <div className='fullLengthButton'>

        <SC_Button
            text="Start"
            handleClick={this.handleStart}
          />
        </div>
        <div className='wrapper'>
          <div className='firstSynthContainer'>
            <ToneSynth 
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange} 
          />
          
          </div>
        
          <div className='secondSynthContainer'>
          <ToneSynth 
            settings={melodySettings}
            handleValueChange={this.handleMelodyValueChange} 
        />

        <CalmSounds 
            settings={bassSettings}
            handleValueChange={this.handleBassValueChange}
          />
          </div>

        </div>
        
      
    

     

        {/* <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={bassSettings.chorus.wet}
          property="chorusWet"
          handleChange={this.handleMelodyValueChange}
        /> */}
      </div>
    )
  }
}