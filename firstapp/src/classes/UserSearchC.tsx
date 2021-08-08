import { Component } from "react";

interface User{
  name: string; age: number
}
interface UserSearchState{
  name: string;
  user: User | undefined;
}
interface UserSearchProps{
  users: User[]
}


class UserSearchC extends Component<UserSearchProps>{
  state: UserSearchState = {
    name: '',
    user: undefined
  }
//notice there is not const declaration in here
  
  handleClick = () => {
    const matchedUser1 = this.props.users.find((user) => {
      return user.name === this.state.name;
    })
    this.setState({user:matchedUser1})
  }

  render() {
    // this.props.users
    // this.state.name
    const {name,user} =this.state
    return (
      <div>
      <h1>Search User Using Class based Component</h1>
      <input  value={this.state.name} onChange={(e) => { this.setState({name:e.target.value})}}></input>
      <button onClick={this.handleClick} >Search</button>
      <div>NAME: {user && user.name}</div>
      <div>AGE: {user  && user.age}</div>
    </div>
    )
  }
}


export default UserSearchC