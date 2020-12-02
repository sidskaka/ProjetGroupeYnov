import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Global from '../../styles/global'
import Articles from './Articles'
import Pagination from './Pagination'
import { Div, Img, Div1, Div2, A, Div21 } from './style.js'
import Chatbot from '../Chatbot'
import chatbot from '../../images/chatbot.png'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Accueil = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(8)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      store.addNotification({
        title: 'Information!',
        message: "Pensez a vous connecter pour avoir plus d'options.",
        type: 'info',
        insert: 'top',
        container: 'top-center',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 7000,
          onScreen: true
        }
      })
    }

    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products'
    })
      .then(res => {
        setLoading(false)
        console.log(res.data)
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
      <ReactNotification />
      {PageLoading}

      <div>
        <Articles articles={currentArticles} />
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
        />
      </div>
      <Div1>
        <a href='#popup1'>
          <Img src={chatbot} />
        </a>
      </Div1>

      <Div2 id='popup1'>
        <Div21>
          <A href='#'>&times;</A>
          <Chatbot />
        </Div21>
      </Div2>
    </Div>
  )
}

export default Accueil
