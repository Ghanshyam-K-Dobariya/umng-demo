import React, { useState } from 'react';

function Top5Students({ data }) {
  // Helper function to calculate percentage
  const calculatePercentage = (scores) => {
    const totalMarks = Object.values(scores).reduce(
      (total, score) => total + parseFloat(score),
      0
    );
    const percentage = (totalMarks / 500) * 100;
    return percentage.toFixed(2);
  };

  // Helper function to filter top 5 students by percentage
  const getTop5Students = (category) => {
    let filteredData = [...data];

    switch (category) {
      case 'boys':
        filteredData = filteredData.filter((item) => item.gender === 'male');
        break;
      case 'girls':
        filteredData = filteredData.filter((item) => item.gender === 'female');
        break;
      case 'subject':
        // Subject-wise filtering
        const subjects = ['gujarati', 'english', 'science', 'maths', 'history'];
        return subjects
          .map((subject) => ({
            subject,
            students: filteredData.filter((item) => parseFloat(item.subjectScores[subject]) > 0),
          }))
          .map(({ subject, students }) => ({
            subject,
            students: students.sort((a, b) => {
              const percentageA = calculatePercentage(a.subjectScores);
              const percentageB = calculatePercentage(b.subjectScores);
              return percentageB - percentageA;
            }),
          }))
          .map(({ subject, students }) => students.slice(0, 5))
          .flat();
      case 'city':
        const cities = ['surat', 'ahemedabad', 'baroda', 'navsari', 'vsapi', 'rajkot'];
        return cities
          .map((city) => ({
            city,
            students: filteredData.filter((item) => item.city === city),
          }))
          .map(({ city, students }) => ({
            city,
            students: students.sort((a, b) => {
              const percentageA = calculatePercentage(a.subjectScores);
              const percentageB = calculatePercentage(b.subjectScores);
              return percentageB - percentageA;
            }),
          }))
          .map(({ city, students }) => students.slice(0, 5))
          .flat();
      default:
        break;
    }

    filteredData.sort((a, b) => {
      const percentageA = calculatePercentage(a.subjectScores);
      const percentageB = calculatePercentage(b.subjectScores);
      return percentageB - percentageA;
    });

    return filteredData.slice(0, 5);
  };

  const [topStudents, setTopStudents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle top 5 calculation
  const handleTop5Calculation = (category) => {
    const top5 = getTop5Students(category);
    setTopStudents(top5);
    setSelectedCategory(category);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px 0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
    buttonActive: {
      backgroundColor: '#0056b3',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      marginBottom: '10px',
      fontSize: '16px',
    },
  };












  return (
    <div>
      <h2>Top 5 Students:</h2>
      <div>
        <button onClick={() => handleTop5Calculation('boys')}>Top 5 Boys</button>
        <button onClick={() => handleTop5Calculation('girls')}>Top 5 Girls</button>
        <button onClick={() => handleTop5Calculation('subject')}>Top 5 Subject-wise</button>
        <button onClick={() => handleTop5Calculation('city')}>Top 5 City-wise</button>
      </div>
      {topStudents.length > 0 && (
        <ul>
          {topStudents.map((item, index) => (
            <li key={index}>
              Name: {item.name}, Year: {item.year}, Percentage: {calculatePercentage(item.subjectScores)}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Top5Students;
