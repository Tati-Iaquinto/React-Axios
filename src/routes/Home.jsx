import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios'

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  // dependencia como array vazia só executa o efeito uma vez
  useEffect(() => {
    getPosts()
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home