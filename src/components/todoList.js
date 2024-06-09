import Card from "./card";

const TodoList = ({filteredList, filterSelect, handleStatus, handleFilter, handleEdit, handleDelete}) => {
    
    const handleSelect = (e) => {
        handleFilter(e.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5 px-md-5 px-lg-5 d-flex justify-content-between">
                    <div className="col-md-6 col-lg-4">
                        <h4>My Todos</h4>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <label className="card-text">
                            <span className="fs-4">Status Filter:</span> 
                            <select value={filterSelect} onChange={handleSelect}>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="notCompleted">Not Completed</option>
                            </select>
                        </label>
                    </div>                            
                </div>
            
                <div className="row my-4 gy-4 gx-4">
                    {filteredList.length === 0 ? <h3 className='h3 text-center mb-4'> Selected Filter Option is Empty </h3>: ""};
                    {filteredList.map((todo,index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <Card todo={todo} handleStatus={handleStatus} handleEdit={handleEdit} handleDelete={handleDelete} />
                            </div>
                        ))}            
                    
                </div>
            </div>
        </>
    )
}

export default TodoList;