import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBooks } from "./crudSlice";
import { useLocation, useNavigate } from "react-router-dom";

const EditCrud = () => {
  const location = useLocation();
  const { id } = location.state;
  const [name, setName] = useState(location.state.name);
  const [author, setAuthor] = useState(location.state.author);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(editBooks({ id, name, author }));
    navigate("/crud", { replace: true });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Edit Book</h2>
      <form id="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Book Name"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          placeholder="Author Name"
        />
        <br />
        <button type="submit">Edit Book</button>
      </form>
    </div>
  );
};

export default EditCrud;
