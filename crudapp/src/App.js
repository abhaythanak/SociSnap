import './App.css';
import { useEffect, useState } from "react";
import { supabase } from "./createClient";

function App() {

const [users, setUsers] = useState([])
const [user,setUser] = useState({ name:'',content:''})
const [user2,setUser2] = useState({ id:'', name:'',content:''})

//  console.log(user)

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

//Add users
async function createUsers(){
  
await supabase
.from('crud')
.insert({ name: user.name, content:user.content })

fetchUsers()
}

//Delete users data
async function deleteUsers(userId){
  
  const {data, error} = await supabase
  .from('crud')
  .delete()
  .eq('id', userId)

  fetchUsers()

  if(error){
    console.log(error)
  } 
  if(data){
    console.log(data)
  }
  }

  function displayUsers(userId){
    users.map((user)=>{
  
        if(user.id===userId){
          setUser2({id:user.id, name:user.name, content:user.content})
        }
        
      })
    }

//   Update ||  EDIT DATA

async function updateUsers(userId){
  
const { data, error } = await supabase
.from('crud')
.update({ id:user2.id, name:user2.name, content:user2.content })
.eq('id', userId)

fetchUsers()

if(error){ 
  console.log(error)
} 
if(data){
  console.log(data)
}

}



  

function handleChange(e){
  setUser(preFormData =>{
    return{
      ...preFormData, 
      [e.target.name]: e.target.value
    }
  })
}

function handleChange2(e){
  setUser(preFormData =>{
    return{
      ...preFormData, 
      [e.target.name]: e.target.value
    }
  })
}


    return (
    <div>
      {/* Form 1 */}
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

      {/* Form 2 */}
      <form onSubmit={updateUsers(user2.id)}>
        <input
        type="text"
        
        name='name'
        onChange={handleChange2}
        defaultValue={user2.name}
        />

        <input
        type="text"
       
        name='content'
        onChange={handleChange2}
        defaultValue={user2.content}
        />

        <button type='submit'>Edit Save</button>
      </form>





      <table>
        <thead>
          <tr>
          <th>id</th> 
          <th>name</th>
          <th>content</th>
          <th>Action</th>
          </tr>
        </thead>
        {users.map((user)=>{
          return(
            <thead>
          <tr key={user.id}>
          <th>{user.id}</th> 
          <th>{user.name}</th>
          <th>{user.content}</th>
          <th>
            <button onClick={()=>{deleteUsers(user.id)}}>Delete</button>
            <button onClick={()=>{displayUsers(user.id)}}>Edit</button>
          </th>
          </tr>
        </thead>
          )
        })}
      </table>
    </div>
  );
}

export default App;
