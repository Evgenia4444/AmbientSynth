import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass'
import * as melodySettings from './tunes/melody'
import * as pianoSettings from './tunes/piano'
import * as drumsSettings from './tunes/drums'
import * as pianoWalkingSettings from './tunes/pianoWalking'

import ToneSynth from './modules/ToneSynth'
import CalmSounds from './modules/CalmSounds'
import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'


let bassSynth
let bassChorus
let bassPingPongDelay //namepspace bass
let bassDistortion
let bassAutoWah
let bassAutoFilter

let melodySynth
let melodyChorus
let melodyPingPongDelay
let melodyDistortion
let melodyAutoWah
let melodyAutoFilter

let pianoWalkingAutoWah

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
    bassDistortion = new Tone.Distortion(bassSettings.distortion)
    bassAutoWah = new Tone.AutoWah(bassSettings.autoWah)
    bassAutoFilter = new Tone.AutoFilter(bassSettings.autoFilter).start()
    bassSynth.chain(bassDistortion, bassAutoWah, bassAutoFilter)

    

    // const bassPart = new Tone.Part((time, note) => {
    //   bassSynth.triggerAttackRelease(
    //     note.noteName,
    //     note.duration,
    //     time,
    //     note.velocity
    //   )
    // }, bassSettings.sequence.steps).start(0)

    // bassPart.loopEnd = bassSettings.sequence.duration
    // bassPart.loop = false
    //
    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyDistortion = new Tone.Distortion(melodySettings.distortion)
    melodyAutoWah = new Tone.AutoWah(melodySettings.autoWah)
    melodyAutoFilter = new Tone.AutoFilter(melodySettings.autoFilter).start()
    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyDistortion, melodyAutoWah, melodyAutoFilter, melodyPingPongDelay)

    

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
        A2: "00020-Linn-9000-Tom-1.mp3",
        A3: "looperman-l-4574891-0303601-my-space-sad-ambient-piano.mp3",
        A4: "vinyl-hiss-5862.mp3",
        A5: "00048-Vermona-DRM1-MK3-BassDrum25.mp3",
        A6: "00016-Linn-9000-Snare-2.mp3",
        A7: "lofi-sad-beat.mp3"
      },
      baseUrl: "http://localhost:3000/samples/",
     
    }).toDestination();

    const pianoPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, pianoSettings.sequence.steps).start(0)

    pianoPart.loopEnd = pianoSettings.sequence.duration
    pianoPart.loop = true
    // //

    // const pianoWalkingPart = new Tone.Part((time, note) => {
    //   sampler.triggerAttackRelease(
    //     note.noteName,
    //     note.duration,
    //     time,
    //     note.velocity
    //   )
    // }, pianoWalkingSettings.sequence.steps).start(0)

    // pianoWalkingPart.loopEnd = pianoWalkingSettings.sequence.duration
    // pianoWalkingPart.loop = true
    //
    //


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
    // //


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
    } else if (property === 'distortionWet') {
      bassDistortion.wet.value = value
      bassSettings.distortion.wet = value
    } else if (property === 'autoWahWet') {
      bassAutoWah.wet.value = value
      bassSettings.autoWah.wet = value
    } else if (property === 'autoFilterWet') {
      bassAutoFilter.wet.value = value
      bassSettings.autoFilter.wet = value
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
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    }else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'distortionWet') {
      melodyDistortion.wet.value = value
      melodySettings.distortion.wet = value
    } else if (property === 'autoWahWet') {
      melodyAutoWah.wet.value = value
      melodySettings.autoWah.wet = value
    } else if (property === 'autoFilterWet') {
      melodyAutoFilter.wet.value = value
      melodySettings.autoFilter.wet = value
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


        <div className='wrapper'>
      
        <div className='firstSynthContainer'>

            <ToneSynth 
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange} 
            />
            <CalmSounds 
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
               settings={melodySettings}
               handleValueChange={this.handleMelodyValueChange}
            />
        
        </div>
        </div>
      </div>
    )
  }
}