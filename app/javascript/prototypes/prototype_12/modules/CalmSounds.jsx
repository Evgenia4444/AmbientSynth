import React, { Component } from 'react'

import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'
import SC_Slider from '../components/SC_Slider'


export default class CalmSounds extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props


    return (
      <div className="CalmSounds">

        <SC_Slider
          name="AutoWah Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.autoWah.wet}
          property="autoWahWet"
          handleChange={handleValueChange}
        />

      </div>
    )
  }
}