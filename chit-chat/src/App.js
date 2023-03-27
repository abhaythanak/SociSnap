import './App.css';
import { useEffect, useState } from "react";
import { supabase } from "./createClient";

function App() {

const [users, setUsers] = useState([])
const [user,setUser] = useState({ name:'',content:''})
 console.log(user)

useEffect(()=>{
  fetchUsers()
},[])

async function fetchUsers(){
  const {data} = await supabase
  .from("crud")
  .select("*")
  setUsers(data)
  // console.log(data)

}

async function createUsers(){
  
await supabase
.from('crud')
.insert({ name: user.name, content:user.content })

}

function handleChange(e){
  setUser(preFormData =>{
    return{
      ...preFormData, 
      [e.target.name]: e.target.value
    }
  })
}

    return (
    <div>
      
      <form onSubmit={createUsers}>
        <input
        type="text"
        placeholder='name'
        name='name'
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder='content'
        name='content'
        onChange={handleChange}
        />

        <button type='submit'>Add</button>
      </form>





      <table>
        <thead>
          <tr>
          <th>id</th> 
          <th>name</th>
          <th>content</th>
          </tr>
        </thead>
        {users.map((user)=>{
          return(
            <thead>
          <tr key={user.id}>
          <th>{user.id}</th> 
          <th>{user.name}</th>
          <th>{user.content}</th>
          </tr>
        </thead>
          )
        })}
      </table>
    </div>
  );
}

export default App;
