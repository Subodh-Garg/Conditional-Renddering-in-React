import { useState } from 'react'

function ProfileTab() {
  const [profile, setProfile] = useState("Gajodhar")

  const toggleProfile = () => {
    setProfile(prev => prev ? null : "Gajodhar")
  }

  return (
    <div className="profile-tab">
      <div className="profile-info">
        {!!profile && profile}
        {!profile && <p>No profile found</p>}
      </div>
      <button onClick={toggleProfile}>Toggle Profile</button>
    </div>
  )
}

export default ProfileTab 