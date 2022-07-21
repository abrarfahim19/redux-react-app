import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, deleteBooks } from "./crudSlice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const CrudView = () => {
  const books = useSelector((state) => state.crudReducer.books);
  const dispatch = useDispatch();
  const [bName, setName] = useState("");
  const [bAuthor, setAuthor] = useState("");

  const handleSubmit = (e) => {
    dispatch(addBooks({ id: uuidv4(), name: bName, author: bAuthor }));
    document.getElementById("add-form").reset();
    e.preventDefault();
  };

  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div>
      <h2>CRUD Operation</h2>
      <div className="crud-container">
        <div>
          <h4>Add Item</h4>
          <form id="add-form" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Book Name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author Name"
            />
            <br />
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <h4>Item Table</h4>
          <table id="book-table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => {
                  const { name, id, author } = book;
                  return (
                    <tr key={id}>
                      {/* <td>{id}</td> */}
                      <td>{name}</td>
                      <td>{author}</td>
                      <td>
                        <Link to="/edit-book" state={{ id, name, author }}>
                          <button>Edit</button>{" "}
                        </Link>
                        <button
                          onClick={() => {
                            handleDelete(id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrudView;
