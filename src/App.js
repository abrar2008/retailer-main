import './App.css';
import  Homepage from './Pages/Homepage/index' ;
import  Signup from './Pages/Signup/Signup' ;
import { HashRouter } from "react-router-dom";
import Storeform from './Pages/Storeform';
import Templetes from './Pages/templates/templates';
import Plans from './Pages/Plans/Plans';
import Templateform from './Pages/Templateform';
import Planform from './Pages/Plansform/Plansform';
import Deletestore from './Pages/DeleteStore/DeleteStore';
import Header from './components/header/header';
import Editform from './Pages/Deleteplan/Deleteplan';
import { auth } from "./Firebase/Firebase";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from './firebase';

function App() 
{
  //initialize date and time
  let myCurrentDate = new Date()
  let date = myCurrentDate.getDate();
  let month = myCurrentDate.getMonth() + 1;
  let year = myCurrentDate.getFullYear();
  let hour = myCurrentDate.getHours();
  let minute = myCurrentDate.getMinutes();
  let second = myCurrentDate.getSeconds();
  let finalDate = date + '/'+ month + '/' + year + ' ' + hour + ':' + minute + ':' + second;


  //pushes data to firebase realtime database
  const dateRef = firebase.database().ref('Current Date - iBuy-Retailer');
  dateRef.push({'Date': finalDate});



//   setTimeout(() => {
//     auth.signOut().then(() => {
//       console.log("log out success")
//      }).catch((error) => {
//        alert("error",error)
   
//      });
    
//      localStorage.clear();
   
//       window.location.reload(); 
//     console.log('you can see me after 2 seconds')
// }, 20000);
  return (  
<>
  {/* <Homepage/> */}
  {/* <HashRouter> */}
    <Router>
      <Header/>
  <Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/templates" exact component={Templetes} />
  <Route path="/signup" exact component={Signup} />
  <Route path="/storeform" exact component={Storeform} />
  <Route path="/templateform" exact component={Templateform} />
  <Route path="/editplan" exact component={Editform} />
  <Route path="/deletestore" exact component={Deletestore} />
  <Route path="/planform" exact component={Planform} />
  <Route path="/plans" exact component={Plans} />
  </Switch>
  </Router>
  {/* </HashRouter> */}
  </>
  )
}

export default App;
