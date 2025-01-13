import { useState } from 'react'
import './TabContainer.css'

function TabContainer({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  )
}

export default TabContainer 