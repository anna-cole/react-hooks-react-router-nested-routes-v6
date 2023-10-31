import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users}/>
    </>
  );
};

export default App;
