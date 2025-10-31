import { useState } from "react"

const Item = ({ item, removeTask }) => {
    const [isEditing, setIsEditing] = useState(false)

    const renderData = () => {
        return (
            <>
                <span>{item.text}</span>
                <button onClick={() => removeTask(item.id)}>
                    Remove
                </button>
            </>
        )
    }

    const renderEditor = () => {
        return <input />
    }

    return (
        <li key={item.id}>
            {isEditing ? renderEditor() : renderData()}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    )
}

const List = ({ list, removeTask }) => {
    return (
        <ul>
            {list.map((item) => (
                <Item key={item.id} item={item} removeTask={removeTask} />
            ))}
        </ul>
    )
}

export default List