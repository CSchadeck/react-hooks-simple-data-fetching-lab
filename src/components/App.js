import React, { useState, useEffect } from "react";

function App() {
    const [puppies, setPuppies] = useState(null);
        
    useEffect(() => {
        fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
        .then((response) => response.json())
        .then((data) => {
            setPuppies(data.people);
            console.log(data.people)
        });
    }, []);

  if (!setPuppies) return <p>Loading...</p>;
  return <img src={puppies} alt="A Random Dog" />;
}

export default App;


