import React from 'react'
import Acordeon from './Acordeon'
import './App.css'

function App() {
  return (
    <div className="app">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt mauris in purus
        efficitur ultricies. Mauris lorem libero, ultrices euismod nunc eu, egestas malesuada massa.
        Nulla ultrices ligula at fringilla iaculis. Donec rutrum tellus urna, id auctor nunc scelerisque
        et. Duis pulvinar convallis massa, pretium pulvinar ex faucibus et. Sed sed feugiat purus, et
        posuere orci. Sed condimentum lorem ac convallis tristique.
      </p>
      <Acordeon>
        <p>
          Quisque blandit est at tristique interdum. Pellentesque vel arcu auctor, finibus erat sit
          amet, pretium leo. Nam vestibulum aliquam rhoncus. Fusce ut erat ut ex consectetur fermentum.
          Morbi eget odio ac mi condimentum molestie eu ut nisi. Quisque eget est at est dapibus hendrerit
          ullamcorper ac metus. Donec vitae augue nulla. Maecenas sed dui varius, viverra lectus eu, mollis
          ligula. Mauris pretium facilisis pharetra. Nullam pharetra suscipit imperdiet. Quisque imperdiet
          tellus sed scelerisque gravida.
        </p>
      </Acordeon>
    </div>
  )
}

export default App
