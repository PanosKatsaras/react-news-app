import { useState } from "react"
import Navbar from "./Components/Navbar"
import News from "./Components/News"

// Main App component that Initializes the category state with the value "general"
// and uses the setCategory function to update the category state when a new category is selected
// Renders the Navbar component and passing the setCategory function as a prop
// Renders the News component and passing the current category state as a prop
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

