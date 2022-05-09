import React, { useState,useEffect} from 'react';
import './App.css';
import Video from './Components/Video/Video'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Modal/Login'
import Cart from './Components/Cart/Cart'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {
  const [user, setUser] = useState(null);
  const [navcol,setNavcol]=useState(true)
 
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <React.Fragment>
    
    
     
      
    
      <Router>
      <Navbar setUser={setUser} user={user} navcol={navcol}/>
      <Routes>
        <Route exact path='/' element={<Video setNavcol={setNavcol}/>}></Route>
        <Route  path='/c' element={< Cart setNavcol={setNavcol} navcol={navcol}/>}></Route>
    
    </Routes>
   
    </Router>
    </React.Fragment>
  );
}

export default App;
