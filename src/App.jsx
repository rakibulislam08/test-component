
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
import Users from './components/users/Users'

const countriesPromised = fetch('https://openapi.programming-hero.com/api/all')
.then (res => res.json())


// const UserPromised = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

function App() {



  return (
    <>
  <Suspense fallback = { <h2>Loading the Data...!</h2>}>
    <Countries countriesPromised={countriesPromised} />
  </Suspense>


    </>
  )
}

export default App
