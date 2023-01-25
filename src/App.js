import './App.css';
import React, {Component} from 'react'

const genereateUsers = () =>{
  return [
    {name: "iva", surname: "asatiani", age: 35, id: 1},
    {name: "rati", surname: "burbu", age: 39, id: 2},
    {name: "shuba", surname: "shoki", age: 95, id: 3},
    {name: "iva", surname: "asatiani", age: 35, id: 4},
    {name: "rati", surname: "burbu", age: 39, id: 5},
    {name: "shuba", surname: "shoki", age: 95, id: 6},
    {name: "iva", surname: "asatiani", age: 35, id: 7},
    {name: "rati", surname: "burbu", age: 39, id: 8},
    {name: "shuba", surname: "shoki", age: 95, id: 9},
    {name: "manana", surname: "tvaradze", age: 45, id: 10},
  ]
}

 class App extends Component{
  constructor(){
    super();
    this.state = {showUsersList: true};
  }
  showChange = () =>{
    this.setState({showUsersList : !this.state.showUsersList});

  }
render(){
  const {showUsersList} = this.state;
  return (
    <div>
      <button onClick = {this.showChange} >show users</button>
      {showUsersList &&<Child></Child>}
    </div>
  )
}
}

class Child extends Component{
  constructor(){
    super()
    this.state = {users: []};
    };
  componentDidMount(){
    const data = genereateUsers();
    this.setState({users: data});
  }
  removeUser = () =>{
    this.setState((prevState) =>{
      const randomNum = Math.floor(Math.random()*prevState.users.length);
      const newUsers = prevState.users.filter((_,index)=> {
        if(randomNum === index){
          return false;
        }else{
          return true;
        }
      })
      return {users: newUsers}
    })
  }

  componentDidUpdate(_, prevState){
    if(prevState.users !== this.state.users){
      document.title = this.state.users.length;
    }
  }

  render(){
    const {users} = this.state;
    console.log(this);
    return (
    <div className="App">
      { 
        users.map((user)=>{
          return <h2 key = {user.id}>{user.name} {user.surname} {user.age}</h2>
        })
      } 
      <button onClick={this.removeUser}> remove
        </button>
    </div>
  );
}
}

export default App