import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div  className="d-flex">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-secondary text-secondary" type="submit">Search</button>
      </form>
      <div className="text-end">
      <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <img src="https://picsum.photos/200/300" alt="" width="32" height="32" className="rounded-circle"> */}
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" >
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Search