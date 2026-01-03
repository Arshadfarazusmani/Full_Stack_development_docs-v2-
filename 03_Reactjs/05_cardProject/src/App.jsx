
import './App.css'
import Card from './components/Card'
import User from './components/user'






function App() {

  const users = [
    { name: "John Doe" },
    { name: "Arshad Faraz" },
    { name: "Jane Smith" },
    { name: "Emily Johnson" },
    { name: "Michael Brown" },
    { name: "Sarah Davis" },
    { name: "David Wilson" },
    { name: "Laura Garcia" },
    { name: "Daniel Martinez" },
    { name: "Sophia Anderson" },
  ];
  

  return (
    <>
    
    <div className="container">
      {users.map((user, index) => (
        <User key={index} name={user.name} />
      ))}
    </div>
   
    </>
  )}

export default App
