import "./card.css";

const Card = ({todo, handleStatus, handleEdit, handleDelete}) => {
    // callback function which sends task status complete/not complete
    const handleChange = (e) => {
        handleStatus({status:e.target.value, id:todo.id});
    }

    // callback function which sends data to edit
    const editCard = () => {
        handleEdit(todo.id,todo.name,todo.description);
    }

    // callback function which sends data to delete
    const deleteCard = () => {
        handleDelete(todo.id);
    }

    return (
        <>
            <div className="card h-100">
                <div className="card-body">
                    <p className="card-text py-2">Name: {todo.name}</p>
                    <p className="card-text py-2">Description: {todo.description}</p>
                    <label className="card-text">
                        Status: 
                        <select value={todo.status} onChange={handleChange} style={todo.status==="completed"?{backgroundColor:"green",color:"white"}:{backgroundColor: "rgba(246, 138, 138, 1)",color:"white"}}>
                            <option value="completed">Completed</option>
                            <option value="notCompleted">Not Completed</option>
                        </select>
                        </label>
                </div>
                <div className="card-body my-2">
                    <div className="d-flex flex-row justify-content-end">
                        <div>
                            <button type="button" className="btn btn-success me-2" onClick={editCard}>Edit</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger me-2" onClick={deleteCard}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;