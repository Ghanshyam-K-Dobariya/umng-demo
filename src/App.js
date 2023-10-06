import React, { useState } from 'react';
import './App.css'
import Top5Students from './Top5Students'; 

function App() {
  // Initialize state variables
  const [name, setName] = useState('');
  const [year, setYear] = useState('2018');
  const [subjectScores, setSubjectScores] = useState({
    gujarati: '',
    english: '',
    science: '',
    maths: '',
    history: '',
  });
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('surat');
  const [data, setData] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new data object with the form values
    const newData = {
      name,
      year,
      subjectScores,
      gender,
      city,
    };

    // Update the data array with the new data
    setData([...data, newData]);

    // Clear the form fields
    setName('');
    setYear('2018');
    setSubjectScores({
      gujarati: '',
      english: '',
      science: '',
      maths: '',
      history: '',
    });
    setGender('male');
    setCity('surat');
  };

  return (
    <div>
      <h1>Student Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Year:</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div>
          <label>Subject Scores:</label>
          <div>
            <label>Gujarati:</label>
            <input
              type="number"
              value={subjectScores.gujarati}
              onChange={(e) =>
                setSubjectScores({
                  ...subjectScores,
                  gujarati: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>English:</label>
            <input
              type="number"
              value={subjectScores.english}
              onChange={(e) =>
                setSubjectScores({
                  ...subjectScores,
                  english: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Science:</label>
            <input
              type="number"
              value={subjectScores.science}
              onChange={(e) =>
                setSubjectScores({
                  ...subjectScores,
                  science: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Maths:</label>
            <input
              type="number"
              value={subjectScores.maths}
              onChange={(e) =>
                setSubjectScores({
                  ...subjectScores,
                  maths: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>History:</label>
            <input
              type="number"
              value={subjectScores.history}
              onChange={(e) =>
                setSubjectScores({
                  ...subjectScores,
                  history: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            <label>Female</label>
          </div>
        </div>
        <div>
          <label>City:</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="surat">Surat</option>
            <option value="ahemedabad">Ahmedabad</option>
            <option value="baroda">Baroda</option>
            <option value="navsari">Navsari</option>
            <option value="vsapi">Vapi</option>
            <option value="rajkot">Rajkot</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Data:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Name: {item.name}, Year: {item.year}, Subject Scores:
              Gujarati: {item.subjectScores.gujarati}, English: {item.subjectScores.english}, Science: {item.subjectScores.science}, Maths: {item.subjectScores.maths}, History: {item.subjectScores.history},
              Gender: {item.gender}, City: {item.city}
            </li>
          ))}
        </ul>
      </div>
      <h1>Student Information Form</h1>
      <form onSubmit={handleSubmit}>
        {/* ... existing form code ... */}
      </form>
   
      {/* Use the Top5Students component here */}
      <Top5Students data={data} />
    </div>
  );
}

export default App;
