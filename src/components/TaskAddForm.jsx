import { useState } from "react"


const TaskAddForm = ({addTask}) => {

    const [userInput, setUserInput] = useState("")

     const handleInput = (e) => {
        setUserInput(e.target.value)
     }
     const submit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
     }

     return <form action="" onSubmit={submit}>
        <input type="text" value={userInput} onChange={handleInput}/>
        <input type="submit" value="add" />
     </form>

}



export default TaskAddForm