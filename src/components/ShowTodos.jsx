import axios from 'axios';
export function ShowTodos({ todoList ,getTodos}) {
    
    
    return <div>

        {todoList.map((el) => {
            return (
              <div>
                <div key={el.id}>
                        {el.title}-{el.status ? "Done" : "Not Done"}
                        {" "}
                  <button>Delete</button>
                </div>
              </div>
            );
        })}

    </div>

}