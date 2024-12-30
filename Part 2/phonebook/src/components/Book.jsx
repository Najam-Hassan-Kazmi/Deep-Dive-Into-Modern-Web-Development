const Book = ({name, number, handleDelete}) =>   //This is clear too. 
    <div>
        <li>{name} {number}
        <button onClick={handleDelete}>delete</button>
        </li>
    </div>

export default Book