function Table(props) {
  // my custom table component

  let rows = [{ name: "CAm's test", URL: "test.com" }, { name: "Test 2", URL: "test2.com" }].map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.URL}</td>
      </tr>
    )
  })

  return (
    //return some jsx
    <table>
      <thead>
        <tr>
          <th>Link Name</th>
          <th>Link URL</th>
        </tr>
      </thead>
      <tbody>
        {rows}  {/* Display the rows dynamically */}
      </tbody>
    </table>
  )
}

export default Table;
