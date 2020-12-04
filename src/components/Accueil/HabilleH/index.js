import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Global from '../../../styles/global'
import Articles from '../Articles'
import { Div } from './style.js'
import 'react-notifications-component/dist/theme.css'

const MenClothing = () => {
  const [articles, setArticles] = useState([])
  let menClothing = []
  const [loading, setLoading] = useState(false)
  const [currentPage] = useState(1)
  const [articlesPerPage] = useState(8)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/`
    })
      .then(res => {
        setArticles(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  for (var i = 0, j = 0; i < articles.length; i++) {
    if (articles[i].category === 'men clothing') {
      menClothing[j] = articles[i]
      j++
    }
  }

  // Get current posts
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = menClothing.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  )

  const PageLoading = loading ? <h1>Chargement de la page ...</h1> : ''
  return (
    <Div>
      <Global />
      {PageLoading}

      <div>
        <Articles articles={currentArticles} />
      </div>
    </Div>
  )
}

export default MenClothing
