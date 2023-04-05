import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"


function List({setitems, items}) {

    if(items.length == 0)
    {
        return "No Items !!!";
    }

    function moveTop(Item)
    {
        setitems(items.filter((item) =>(
            (item !== Item)
        )))

        setitems(items => [Item, ...items]);
    }

    function edit(Item)
    {
        document.getElementById("input-item").value = Item.name;
        document.getElementById("input-priority").value = Item.priority;

        document.getElementById("btn-add").innerText = "Done";
        document.getElementById("btn-add").style.backgroundColor = "red";

        removeItem(Item);

        
    }

    function removeItem(Item)
    {
        setitems(items.filter((item) =>(
            (item !== Item)
        )))
    }
    
    const handleDragEnd = (results) =>
    {
        let tempitem = [...items]
        let [selectedRow] = tempitem.splice(results.source.index, 1) 
        tempitem.splice(results.destination.index, 0, selectedRow)

        setitems(tempitem)
    }

    return (
        <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
            <table id="tabledata">
            <thead>
                <tr>
                    <th>
                        
                    </th>
                    <th>
                    List Items 
                    </th>
                    <th>
                        Priority
                    </th>
                </tr> 
            </thead>
            
            <Droppable droppableId="tbody">
            {
                (provided) => 
                (<tbody ref={provided.innerRef} {...provided.droppableProps}>
                    {items.length > 0 && items.map((Item, index) =>(
                        <Draggable draggableId={Item.name} index={index}key={Item.name}>
                        {
                            (provided) => (
                            <tr ref={provided.innerRef} {...provided.draggableProps}>
                                <td style={{cursor: "grab"}}{...provided.dragHandleProps}>
                                    
                                    =
                                    {/* <a onClick={()=>moveTop(Item)}>^</a> */}
                                </td>
                                <td>
                                    {Item.name}
                                </td>
                                <td id="priority">
                                    {Item.priority}
                                </td>
                                <td>
                                    <button onClick={()=>edit(Item)}className="secondary" id="btn-edit">Edit</button>
                                </td>
                                <td>
                                    <a onClick={()=>removeItem(Item)}id="remove">X</a>
                                </td>
                            
                            </tr>
                            )
                        }
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </tbody>)
            }
            </Droppable>
                

            </table>
        </DragDropContext>
    )
}

export default List