@prototypes_data = [
  {
    name: 'First module / First prototype'
  },
  {
    name: 'Second oscillator'
  },
  {
    name: 'Abstract art'
  },
  {
    name: 'Second oscillator'
  },
  {
    name: 'Third oscillator'
  },
  {
    name: 'Tone.js + UI'
  },
  {
    name: 'Tone.js + UI Advanced'
  },
  {
    name: 'Two synths'
  },
  {
    name: 'Composition'
  },
  {
    name: 'Adding samplers'
  },
  {
    name: 'Adding samplers (2d try)'
  },
  {
    name: 'My synth with samplers'
  },
  {
    name: 'My synth with samplers (2d try)'
  },
  {
    name: 'Final Synth'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
