import React from 'react'
import Header from '../components/Header'
import CardList from '../components/CardList'

function HomePage() {
  return (
    <div className='App'>
      <main className='main_container'>
        <Header />
        <CardList />
      </main>
    </div>
  )
}

export default HomePage
