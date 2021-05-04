import request from "../utils/request"

function Navbar() {
  return (
    <nav>
      {Object.entries(request).map(([key, {title, url}]) => (
        <h2>{title}</h2>
      ))}
    </nav>
  )
}

export default Navbar
