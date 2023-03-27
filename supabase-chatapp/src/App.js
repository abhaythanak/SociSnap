import { useState} from "react"



function App() {
 
 
// const [name, setName] = useState("dummy user")
const [name, setName] = useState("")
// const [chats, setChats] = useState([{name:'user1', message:'message1'},{name:'dummy1', message:'message2'}])
const [chats, setChats] = useState([])

const [message,setMessage] = useState('');

const sendChat = ()=>{
  const c = [...chats];
  c.push({name,message:message})
  setChats(c)
  setMessage('')
}
  return(
    <>
   {name? null : <div>
      <input
      type="text"
      placeholder="Enter name to start"
      onBlur={(e)=>setName(e.target.value)}
      />
    </div>}

   { name? <div>
       <h1>User: {name}</h1>
    <div className="chat-container">
      {chats.map(c=><div className=" container me flex flex-row-reverse ">
      <p className=" rounded-md my-1 mx-0 p-3 bg-orange-400">
        <strong>{c.name}</strong>
        <span>{c.message}</span>
      </p>
      </div>)}
    </div>
    <div className=" fixed w-full bottom-1 flex flex-row">
      <input className=" py-4 px-0 flex-grow"
       type="text"
       value={message}
       placeholder="enter your chat"
       onInput={e=>setMessage(e.target.value)}></input>
      <button className="py-4 px-0"
      onClick={e=>sendChat()}>Send</button>
    </div>

    </div> : null}
   
    </>
  )
}

export default App;
