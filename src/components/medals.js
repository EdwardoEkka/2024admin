import React, { useState } from "react";
import axios from "axios";


const MedalCount = () => {
  const [groupName, setGroupName] = useState("");
  const [goldCount, setGoldCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);
  const [submitMessage,SetsubmitMessage]=useState("");

  const groupOptions = ["Pragati", "Shakti", "Shanti", "Maitri"];

  const handleSubmit = async () => {
    if (!groupName || !goldCount || !silverCount || !bronzeCount) {
      SetsubmitMessage("Please fill in all fields");
      console.error("Please fill in all fields");
      return;
    }
    else
    {
      SetsubmitMessage("Medals added.");
    }

    try {
      const response = await axios.post("http://localhost:5000/events/medal_input",
      {
        groupName,
        goldCount,
        silverCount,
        bronzeCount,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      );
      console.log("POST request successful", response.data);
    } catch (error) {
      console.error("Error making POST request", error);
    }
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
      <label>
        GroupName
        <select
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        >
          <option value="">Select Group</option>
          {groupOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Gold:
        <input
          type="number"
          value={goldCount}
          onChange={(e) => setGoldCount(e.target.value)}
        />
      </label>
      <label>
        Silver:
        <input
          type="number"
          value={silverCount}
          onChange={(e) => setSilverCount(e.target.value)}
        />
      </label>
      <label>
        Bronze:
        <input
          type="number"
          value={bronzeCount}
          onChange={(e) => setBronzeCount(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <div><p>{submitMessage}</p></div>
      <br></br>
    </div>
  );
};

export default MedalCount;
