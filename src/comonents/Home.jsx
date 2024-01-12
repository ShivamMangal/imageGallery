import React from 'react'
import { Link} from "react-router-dom";
import "./first.css"

const Home = () => {
  return (
    <div>
        <h1>Image Gallery</h1>
        <Link to="/gallery">
        <button>Go</button>
        </Link>
    </div>
  )
}

export default Home