import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FlowerCard from "./components/FlowerCard.jsx"

const flowers = [
  { image: '/cicek2.jpg', price: 250 },
  { image: '/cicek2.jpg', price: 300 },
  { image: '/cicek3.jpg', price: 180 },
  { image: '/cicek4.jpg', price: 220 },
  { image: '/cicek5.jpg', price: 275 },
  { image: '/cicek6.jpg', price: 320 },
]
createRoot(document.getElementById('root')).render(
  
 <div className="container">
    {flowers.map((f, i) => (
      <FlowerCard key={i} image={f.image} price={f.price} />
    ))}
  </div>
)
