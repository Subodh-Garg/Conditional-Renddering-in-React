import { useState } from 'react'
import TabContainer from './components/TabContainer'
import TodoTab from './components/tabs/TodoTab'
import ProfileTab from './components/tabs/ProfileTab'
import CounterTab from './components/tabs/CounterTab'
import SearchTab from './components/tabs/SearchTab'
import CalculatorTab from './components/tabs/CalculatorTab'
import './App.css'

function App() {
  const tabs = [
    { id: 'todo', label: 'Todo List', component: <TodoTab /> },
    { id: 'counter', label: 'Counter', component: <CounterTab /> },
    { id: 'search', label: 'Search', component: <SearchTab /> },
    { id: 'calculator', label: 'Calculator', component: <CalculatorTab /> },
    { id: 'profile', label: 'User Profile', component: <ProfileTab /> }
  ]

  return (
    <div className="container">
      <h3>Conditional Rendering (and its Caveats 🙈)</h3>
      <TabContainer tabs={tabs} />
    </div>
  )
}

export default App
