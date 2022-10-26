import { getRandomArbitrary } from '../prototypes/prototype_1/utilities'

document.addEventListener('DOMContentLoaded', () => {
  console.log('Test ', getRandomArbitrary(0, 1))

  const container = document.getElementById('prototype_3')


  
  const main_container = document.createElement('div')
  const main_button = document.createElement('div')
  const part_1 = document.createElement('div')
  const part_1_1 = document.createElement('div')
  const part_1_2 = document.createElement('div')
  const part_1_3 = document.createElement('div')

  const part_2 = document.createElement('div')
  const part_2_1 = document.createElement('div')
  const part_2_2 = document.createElement('div')
  const part_2_3 = document.createElement('div')

  const button_1 = document.createElement('div')
  const button_2 = document.createElement('div')
  const button_3 = document.createElement('div')
  const rect_button_x1 = document.createElement('div')
  const rect_button_x2 = document.createElement('div')
  const rect_button_x3 = document.createElement('div')
  const rect_button_1 = document.createElement('div')
  const rect_button_2 = document.createElement('div')
  const rect_button_3 = document.createElement('div')

  const button_4 = document.createElement('div')
  const button_5 = document.createElement('div')
  const button_6 = document.createElement('div')
  const rect_button_x4 = document.createElement('div')
  const rect_button_x5 = document.createElement('div')
  const rect_button_x6 = document.createElement('div')
  const rect_button_4 = document.createElement('div')
  const rect_button_5 = document.createElement('div')
  const rect_button_6 = document.createElement('div')
  
  
  
  
  main_container.classList.add('main_container')
  main_button.classList.add('main_button')
  part_1.classList.add('part_1')
  part_1_1.classList.add('part_1_1')
  part_1_2.classList.add('part_1_2')
  part_1_3.classList.add('part_1_3')
  part_2.classList.add('part_2')
  part_2_1.classList.add('part_2_1')
  part_2_2.classList.add('part_2_2')
  part_2_3.classList.add('part_2_3')
  button_1.classList.add('button_1')
  button_2.classList.add('button_2')
  button_3.classList.add('button_3')
  rect_button_x1.classList.add('rect_button_x1')
  rect_button_x2.classList.add('rect_button_x2')
  rect_button_x3.classList.add('rect_button_x3')
  rect_button_1.classList.add('rect_button_1')
  rect_button_2.classList.add('rect_button_2')
  rect_button_3.classList.add('rect_button_3')

  button_4.classList.add('button_4')
  button_5.classList.add('button_5')
  button_6.classList.add('button_6')
  rect_button_x4.classList.add('rect_button_x4')
  rect_button_x5.classList.add('rect_button_x5')
  rect_button_x6.classList.add('rect_button_x6')
  rect_button_4.classList.add('rect_button_4')
  rect_button_5.classList.add('rect_button_5')
  rect_button_6.classList.add('rect_button_6')

  

  container.appendChild(main_container)
  main_container.appendChild(part_1)
  main_container.appendChild(main_button)
  main_container.appendChild(part_2)
  part_1.appendChild(part_1_1)
  part_1.appendChild(part_1_2)
  part_1.appendChild(part_1_3)
  part_1_1.appendChild(button_1)
  part_1_1.appendChild(button_2)
  part_1_1.appendChild(button_3)
  part_1_2.appendChild(rect_button_x1)
  part_1_2.appendChild(rect_button_x2)
  part_1_2.appendChild(rect_button_x3)
  part_1_3.appendChild(rect_button_1)
  part_1_3.appendChild(rect_button_2)
  part_1_3.appendChild(rect_button_3)

  part_2.appendChild(part_2_1)
  part_2.appendChild(part_2_2)
  part_2.appendChild(part_2_3)
  part_2_1.appendChild(button_4)
  part_2_1.appendChild(button_5)
  part_2_1.appendChild(button_6)
  part_2_2.appendChild(rect_button_x4)
  part_2_2.appendChild(rect_button_x5)
  part_2_2.appendChild(rect_button_x6)
  part_2_3.appendChild(rect_button_4)
  part_2_3.appendChild(rect_button_5)
  part_2_3.appendChild(rect_button_6)

})



