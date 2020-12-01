/* eslint-disable react/no-deprecated */
import React from 'react'
import ChatBot from 'react-simple-chatbot'

const ExampleDBPedia = () => {
  return (
    <ChatBot style={{ marginLeft: '-5%', marginTop: '-5%' }}
      headerTitle='Speech Recognition'
      recognitionEnable={true}
      steps={[
        {
          id: '0',
          message: 'Bonjour',
          trigger: '1'
        },
        {
          id: '1',
          message: 'Dans quelle categorie souhaitez-vous aller ?',
          trigger: '2'
        },
        {
          id: '2',
          options: [
            { value: 1, label: 'electronics', trigger: 'electronics' },
            { value: 2, label: 'jewelery', trigger: 'jewelery' },
            { value: 3, label: 'men clothing', trigger: 'menclothing' },
            { value: 4, label: 'women clothing', trigger: 'womenclothing' }
          ]
        },
        {
          id: 'electronics',
          component: (
            <div>
              {' '}
              <a href='https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot'>
                electronics
              </a>{' '}
            </div>
          ),
          trigger: '2'
        },
        {
          id: 'jewelery',
          component: (
            <div>
              {' '}
              <a href='https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot'>
                jewelery
              </a>{' '}
            </div>
          ),
          trigger: '2'
        },
        {
          id: 'menclothing',
          component: (
            <div>
              {' '}
              <a href='https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot'>
                women clothing
              </a>{' '}
            </div>
          ),
          trigger: '2'
        },
        {
          id: 'womenclothing',
          component: (
            <div>
              {' '}
              <a href='https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot'>
                electronics
              </a>{' '}
            </div>
          ),
          trigger: '2'
        }
      ]}
    />
  )
}

export default ExampleDBPedia
