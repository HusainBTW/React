import React , {useState} from 'react'

export default function ProfileCard({ profiles, setProfiles }) { 
    const [name ,setName] = useState('');
    const [age ,setAge] = useState('');

    const handleSubmit = () => {
        if (name && age) {
            setProfiles([...profiles, { name, age }]);
            setName('');
            setAge('');
          }
    };

  return (
    <div>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <input
        type='number'
        placeholder='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)} 
      />
      <button onClick = {handleSubmit}>Submit</button>
      <div>
        {profiles.map((profile, index) => (
          <div key={index}>
            {profile.name} - {profile.age}
          </div>
        ))}
      </div>
    </div>
  );
}
