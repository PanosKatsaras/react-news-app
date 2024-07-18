import { useState } from "react"
import Navbar from "./Components/Navbar"
import News from "./Components/News"
// Main App component that the category state is passed as a prop to the News component
const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <News category={category}/>
    </div>
  )
}

export default App

