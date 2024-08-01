import './App.css'
import { Canvas } from '@react-three/fiber'
import Phone from './features/Phone'

function App() {
  return (
    <Canvas className="canvas"
      camera={{
        fov: 50, // default = 50
        near: 0.1,
        far: 2000,
        position: [0, 0.3, 4]  // default z = 4
      }} 
    >
      <Phone/>
    </Canvas>
  )
}

export default App
