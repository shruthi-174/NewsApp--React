// import './App.css';
// import React, {useState } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// const App=()=>{
// pageSize = 5;
// //  apiKey="e0235c4e0272496eb324bc113d198c07"
 
// const [progress, setProgress] = useState(0)
//   setProgress = (progress)=>{
//     this.setState({progress: progress})
//   }


//     return (
//       <div>
//         <Router>
//         <Navbar/> 
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={this.state.progress} 
//       />
//         <Switch>
//           <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
  import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = "e0235c4e0272496eb324bc113d198c07"
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}