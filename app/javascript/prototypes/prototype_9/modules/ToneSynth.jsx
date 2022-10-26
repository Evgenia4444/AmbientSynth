import React, { Component } from 'react'
import SC_ToggleButtonSet from '../SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'

export default class SC_ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props // what we need to pass into this component 
    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="ToneSynth">
         <SC_ToggleButtonSet
          name="Type"
          options={options}
          value={settings.synth.oscillator.type}
          property="synthType"
          handleChange={handleValueChange}
        />

        <SC_Slider
          name="Synth Envelope Attack"
          min={0}
          max={10}
          step={0.01}
          value={settings.synth.envelope.attack}
          property="synthEnvelopeAttack"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Synth Envelope Decay"
          min={0}
          max={10}
          step={0.01}
          value={settings.synth.envelope.decay}
          property="synthEnvelopeDecay"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Synth Envelope Sustain"
          min={0}
          max={1}
          step={0.01}
          value={settings.synth.envelope.sustain}
          property="synthEnvelopeSustain"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Synth Envelope Release"
          min={0}
          max={10}
          step={0.01}
          value={settings.synth.envelope.release}
          property="synthEnvelopeRelease"
          handleChange={handleValueChange} //убираем this, потому что он не в компоненте ToneSynth, он приходит извне как callback
           // здесь можно было также написать this.props.handleValueChange, но мы вытащили его из this.props, поэтому просто пишем handleValueChange
        />                                
      </div>
    )
  }
}