
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MedalList = () => {
  const [medals, setMedals] = useState([]);

  useEffect(() => {

    const fetchMedals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events/medal_data'); 
        setMedals(response.data);
      } catch (error) {
        console.error('Error fetching medal data', error);
      }
    };

   
    fetchMedals();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
      <h2>Medal List</h2>
      <ul>
        {medals.map((medal) => (
          <li key={medal._id}>
            <strong>Group Name:</strong> {medal.groupName},{' '}
            <strong>Gold Count:</strong> {medal.goldCount},{' '}
            <strong>Silver Count:</strong> {medal.silverCount},{' '}
            <strong>Bronze Count:</strong> {medal.bronzeCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedalList;
