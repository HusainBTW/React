import React , { useState } from 'react';
import ProfileCard from "./ProfileCard";
function App(){
  const [profiles , setProfiles] = useState([]);
  
  const handleDelete = () => {
    setProfiles([]);
  };

  return(
    <div>
      <ProfileCard profiles={profiles} setProfiles={setProfiles} />
      <button onClick={handleDelete}>Delete All</button>
    </div>
  );
}
export default App;