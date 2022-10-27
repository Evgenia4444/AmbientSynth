import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass'
import * as melodySettings from './tunes/melody'
import * as pianoSettings from './tunes/piano'
import * as drumsSettings from './tunes/drums'
import * as birdsSettings from './tunes/birds'
import * as forestSettings from './tunes/forest'
import * as oceanSettings from './tunes/ocean'
import * as fireSettings from './tunes/fire'

import ToneSynth from './modules/ToneSynth'
import CalmSounds from './modules/CalmSounds'
import Widener from './modules/Widener'
import HigherSounds from './modules/HigherSounds'
import VibratoSound from './modules/VibratoSound'
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


let forestSynth
let forestPingPongDelay
let forestDistortion
let forestAutoWah
let forestAutoFilter
let forestStereoWidener
let forestTremolo
let forestPitchShift

let oceanSynth
let oceanPingPongDelay
let oceanDistortion
let oceanAutoWah
let oceanAutoFilter
let oceanStereoWidener
let oceanTremolo
let oceanPitchShift

let fireSynth
let firePingPongDelay
let fireDistortion
let fireAutoWah
let fireAutoFilter
let fireStereoWidener
let fireTremolo
let firePitchShift
let fireVibrato
let fireJcReverb

export default class Container extends Component {
  constructor(props) {
    super(props)

   

   

    this.state = {
      bassSettings,
      melodySettings,
      forestSettings,
      oceanSettings, 
      fireSettings
   
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, forestSettings, oceanSettings, fireSettings } = this.state

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
    // bassPart.loop = true
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


    //
    //
    forestSynth = new Tone.Synth(forestSettings.synth)
    forestDistortion = new Tone.Distortion(forestSettings.distortion)
    forestAutoWah = new Tone.AutoWah(forestSettings.autoWah)
    forestAutoFilter = new Tone.AutoFilter(forestSettings.autoFilter).start()
    forestPingPongDelay = new Tone.PingPongDelay(
      forestSettings.pingPongDelay
    ).toDestination()
    forestStereoWidener = new Tone.StereoWidener(forestSettings.stereoWidener)
    forestTremolo = new Tone.Tremolo(forestSettings.tremolo)
    forestPitchShift = new Tone.PitchShift(forestSettings.pitchShift)

    forestSynth.chain( forestDistortion, forestAutoWah, forestAutoFilter, forestStereoWidener, 
                       forestTremolo, forestPitchShift, forestPingPongDelay)

    const forestPart = new Tone.Part((time, note) => {
      forestSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, forestSettings.sequence.steps).start(0)

    forestPart.loopEnd = forestSettings.sequence.duration
    forestPart.loop = true
    //
    //

    //
    //
    oceanSynth = new Tone.Synth(oceanSettings.synth)
    oceanDistortion = new Tone.Distortion(oceanSettings.distortion)
    oceanAutoWah = new Tone.AutoWah(oceanSettings.autoWah)
    oceanAutoFilter = new Tone.AutoFilter(oceanSettings.autoFilter).start()
    oceanPingPongDelay = new Tone.PingPongDelay(
      oceanSettings.pingPongDelay
    ).toDestination()
    oceanStereoWidener = new Tone.StereoWidener(oceanSettings.stereoWidener)
    oceanTremolo = new Tone.Tremolo(oceanSettings.tremolo)
    oceanPitchShift = new Tone.PitchShift(oceanSettings.pitchShift)

    oceanSynth.chain( oceanDistortion, oceanAutoWah, oceanAutoFilter, oceanStereoWidener, 
                       oceanTremolo, oceanPitchShift, oceanPingPongDelay)

    const oceanPart = new Tone.Part((time, note) => {
      oceanSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, oceanSettings.sequence.steps).start(0)

    oceanPart.loopEnd = oceanSettings.sequence.duration
    oceanPart.loop = true
    
    //

    //
    //
    fireSynth = new Tone.Synth(fireSettings.synth)
    fireDistortion = new Tone.Distortion(fireSettings.distortion)
    fireAutoWah = new Tone.AutoWah(fireSettings.autoWah)
    fireAutoFilter = new Tone.AutoFilter(fireSettings.autoFilter).start()
    firePingPongDelay = new Tone.PingPongDelay(
      fireSettings.pingPongDelay
    ).toDestination()
    fireStereoWidener = new Tone.StereoWidener(fireSettings.stereoWidener)
    fireTremolo = new Tone.Tremolo(fireSettings.tremolo)
    firePitchShift = new Tone.PitchShift(fireSettings.pitchShift)
    fireVibrato = new Tone.Vibrato(fireSettings.vibrato)
    fireJcReverb = new Tone.JCReverb(fireSettings.jcReverb)
    fireSynth.chain( fireDistortion, fireAutoWah, fireAutoFilter, fireStereoWidener, 
                       fireTremolo, firePitchShift, fireVibrato, fireJcReverb, firePingPongDelay)

    const firePart = new Tone.Part((time, note) => {
      fireSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, fireSettings.sequence.steps).start(0)

    firePart.loopEnd = fireSettings.sequence.duration
    firePart.loop = true
    //
    //


    const sampler = new Tone.Sampler({
      urls: {
        A1: "00001-Linn-9000-BassDrumrum1.mp3",   
        A2: "00020-Linn-9000-Tom-1.mp3",
        A3: "looperman-l-2989317-0302008-dark-ambient-piano-blackforestbeats.wav",
        A4: "vinyl-hiss-5862.mp3",
        A5: "00048-Vermona-DRM1-MK3-BassDrum25.mp3",
        A6: "00016-Linn-9000-Snare-2.mp3",
        A7: "lofi-sad-beat.mp3",
        A8: "mixkit-little-birds-singing-in-the-trees-17.wav",
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

    const birdsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, birdsSettings.sequence.steps).start(0)

    birdsPart.loopEnd = birdsSettings.sequence.duration
    birdsPart.loop = true
    //
    //


    // const drumsPart = new Tone.Part((time, note) => {
    //   sampler.triggerAttackRelease(
    //     note.noteName,
    //     note.duration,
    //     time,
    //     note.velocity
    //   )
    // }, drumsSettings.sequence.steps).start(0)

    // drumsPart.loopEnd = drumsSettings.sequence.duration
    // drumsPart.loop = true
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

  handleForestValueChange = (property, value) => {
    const { forestSettings } = this.state

    if (property === 'synthType') {
      forestSynth.oscillator.type = value
      forestSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      forestSynth.envelope.attack = value
      forestSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      forestSynth.envelope.decay = value
      forestSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      forestSynth.envelope.sustain = value
      forestSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      forestSynth.envelope.release = value
      forestSettings.synth.envelope.release = value
    }else if (property === 'pingPongDelayWet') {
      forestPingPongDelay.wet.value = value
      forestSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      forestChorus.wet.value = value
      forestSettings.chorus.wet = value
    } else if (property === 'distortionWet') {
      forestDistortion.wet.value = value
      forestSettings.distortion.wet = value
    } else if (property === 'autoWahWet') {
      forestAutoWah.wet.value = value
      forestSettings.autoWah.wet = value
    } else if (property === 'autoFilterWet') {
      forestAutoFilter.wet.value = value
      forestSettings.autoFilter.wet = value
    } else if (property === 'stereoWidenerWet') {
      forestStereoWidener.wet.value = value
      forestSettings.stereoWidener.wet = value
    } else if (property === 'tremoloWet') {
      forestTremolo.wet.value = value
      forestSettings.tremolo.wet = value
    } else if (property === 'pitchShiftWet') {
      forestPitchShift.wet.value = value
      forestSettings.pitchShift.wet = value
    }

    this.setState({
      forestSettings
    })
  }

  handleOceanValueChange = (property, value) => {
    const { oceanSettings } = this.state

    if (property === 'synthType') {
      oceanSynth.oscillator.type = value
      oceanSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      oceanSynth.envelope.attack = value
      oceanSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      oceanSynth.envelope.decay = value
      oceanSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      oceanSynth.envelope.sustain = value
      oceanSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      oceanSynth.envelope.release = value
      oceanSettings.synth.envelope.release = value
    }else if (property === 'pingPongDelayWet') {
      oceanPingPongDelay.wet.value = value
      oceanSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      oceanChorus.wet.value = value
      oceanSettings.chorus.wet = value
    } else if (property === 'distortionWet') {
      oceanDistortion.wet.value = value
      oceanSettings.distortion.wet = value
    } else if (property === 'autoWahWet') {
      oceanAutoWah.wet.value = value
      oceanSettings.autoWah.wet = value
    } else if (property === 'autoFilterWet') {
      oceanAutoFilter.wet.value = value
      oceanSettings.autoFilter.wet = value
    } else if (property === 'stereoWidenerWet') {
      oceanStereoWidener.wet.value = value
      oceanSettings.stereoWidener.wet = value
    } else if (property === 'tremoloWet') {
      oceanTremolo.wet.value = value
      oceanSettings.tremolo.wet = value
    } else if (property === 'pitchShiftWet') {
      oceanPitchShift.wet.value = value
      oceanSettings.pitchShift.wet = value
    }

    this.setState({
      forestSettings
    })
  }


  handleFireValueChange = (property, value) => {
    const { fireSettings } = this.state

    if (property === 'synthType') {
      fireSynth.oscillator.type = value
      fireSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      fireSynth.envelope.attack = value
      fireSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      fireSynth.envelope.decay = value
      fireSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      fireSynth.envelope.sustain = value
      fireSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      fireSynth.envelope.release = value
      fireSettings.synth.envelope.release = value
    }else if (property === 'pingPongDelayWet') {
      firePingPongDelay.wet.value = value
      fireSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      fireChorus.wet.value = value
      fireSettings.chorus.wet = value
    } else if (property === 'distortionWet') {
      fireDistortion.wet.value = value
      fireSettings.distortion.wet = value
    } else if (property === 'autoWahWet') {
      fireAutoWah.wet.value = value
      fireSettings.autoWah.wet = value
    } else if (property === 'autoFilterWet') {
      fireAutoFilter.wet.value = value
      fireSettings.autoFilter.wet = value
    } else if (property === 'pitchShiftWet') {
      firePitchShift.wet.value = value
      fireSettings.pitchShift.wet = value
    } else if (property === 'vibratoWet') {
      fireVibrato.wet.value = value
      fireSettings.vibrato.wet = value
    } else if (property === 'jcReverbWet') {
      fireJcReverb.wet.value = value
      fireSettings.jcReverb.wet = value
    }

    this.setState({
      fireSettings
    })
  }



  render() {
    const { bassSettings, melodySettings, forestSettings, oceanSettings, fireSettings } = this.state


    return (
      <div className="Container">


        {/* <div className='header'>
         <h1>Ambient Synth</h1>
        </div> */}
          <SC_Button
            text="Ambient Synth"
            handleClick={this.handleStart}
          />
        <div className='wrapper'>
      
        <div className='firstSynthContainer'>
          <h2>Fire</h2>
            <ToneSynth 
              settings={fireSettings}
              handleValueChange={this.handleFireValueChange} 
            />

            <VibratoSound
               settings={fireSettings}
               handleValueChange={this.handleFireValueChange}
            />

        </div>
      
        <div className='secondSynthContainer'>
        <h2>Wind</h2>
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

        <div className='wrapper'>
      
          <div className='firstSynthContainer'>
          <h2>Forest</h2>
              <ToneSynth 
                settings={forestSettings}
                handleValueChange={this.handleForestValueChange} 
              />
              <CalmSounds 
                settings={forestSettings}
                handleValueChange={this.handleForestValueChange}
              />
              <Widener 
                settings={forestSettings}
                handleValueChange={this.handleForestValueChange}
              />
               <HigherSounds 
                settings={forestSettings}
                handleValueChange={this.handleForestValueChange}
              />

          </div>
        
          <div className='secondSynthContainer'>
          <h2>Ocean</h2>
              <ToneSynth 
                settings={oceanSettings}
                handleValueChange={this.handleOceanValueChange} 
              />
              <CalmSounds 
                settings={oceanSettings}
                handleValueChange={this.handleOceanValueChange}
              />
              <Widener 
                settings={oceanSettings}
                handleValueChange={this.handleOceanValueChange}
              />
               <HigherSounds 
                settings={oceanSettings}
                handleValueChange={this.handleOceanValueChange}
              />

      
      </div>
      </div>
      </div>
    )
  }
}