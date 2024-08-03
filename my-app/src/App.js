import './App.css';
import Samp from './Samp';
import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    { sName: 'waga', img: 'https://picsum.photos/id/237/200/300', bg: 'green' },
    { sName: 'ben', img: 'https://picsum.photos/id/238/200/300', bg: 'red' },
    { sName: 'meir', img: 'https://picsum.photos/id/239/200/300', bg: 'gray' },
    { sName: 'mor', img: 'https://picsum.photos/id/236/200/300', bg: 'blue' }
  ]);

  return (
    <div>
      {students.map((student, index) => (
        <Samp
          key={index}
          sName={student.sName}
          img={student.img}
          bg={student.bg}
        />
      ))}
    </div>
  );
}

export default App;
