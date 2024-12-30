const Search = ({ search, handleSearch }) =>
    <div>
        {/* 
            The input field for the search query.
            - The `value` prop makes the input controlled by the `search` state.
            - The `onChange` prop calls `handleSearch` to update the state as the user types.
        */}
        <input placeholder="Enter the name/number" value={search} onChange={handleSearch} />
    </div>

    export default Search