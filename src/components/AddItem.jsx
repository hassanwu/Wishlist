function AddItem({setitems, items}) {

    const addItemToitems = (e) =>
    {
        document.getElementById("btn-add").innerText = "Add";
        document.getElementById("btn-add").style.backgroundColor = "rgb(88, 88, 159)";

        let newItemName = document.getElementById("input-item").value;
        let newItemPriority = document.getElementById("input-priority").value;

        let obj = {
            name: newItemName,
            priority: newItemPriority
        }

        setitems(items => [...items, obj]);

        document.getElementById("input-item").value = "";
        document.getElementById("input-priority").value = "";
    }
  return (
    <>
        <div className="input-group">
            <input type="text" placeholder="Add Item" id="input-item"/>  
            <input type="number" placeholder="Priority" id="input-priority"/> 
            <button id="btn-add"onClick={addItemToitems}>Add</button> 
        </div>
        
    </>
  )
}

export default AddItem