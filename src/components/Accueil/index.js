import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Global from '../../styles/global'
import Articles from './Articles'
import Pagination from './Pagination'
import { Div } from './style.js'

const Accueil = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(8)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products'
    })
      .then(res => {
        setLoading(false)
        setArticles(res.data)
      })
      .catch(err => {
        setLoading(true)
        console.log(err)
      })
  }, [])

  // Get current posts
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(
      indexOfFirstArticle,
      indexOfLastArticle
  )

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const PageLoading = loading ? <h1>Chargement de la page ...</h1> : ''
  return (
    <Div>
      <Global />
      {PageLoading}
      <div>                

        <Articles articles={currentArticles} />
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
        />

      </div>
    </Div>
  )
}

export default Accueil
