import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

import { addBook } from "../actions/booksActions";
function NewBookForm(props) {
  const [newBook, setNewBook] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(newBook) === "{}") {
      swal("Oops!", "You should add the book details first ", "warning");
    } else {
      dispatch(addBook(newBook));
      props.handleToggleBookForm();
      swal(
        "Book Added!",
        "Congratulations your book has been added in our books list ",
        "success"
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="new-book-form">
      <Form.Group className="mb-3" controlId="formPlaintextTitle">
        <Form.Label>Title</Form.Label>

        <Form.Control
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="title"
          value={newBook.title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintextTitle">
        <Form.Label>Author</Form.Label>

        <Form.Control
          onChange={handleChange}
          name="author"
          type="text"
          placeholder="author"
          value={newBook.author}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintextTitle">
        <Form.Label>Cover Image URL</Form.Label>

        <Form.Control
          onChange={handleChange}
          name="img"
          type="text"
          placeholder="cover image url"
          value={newBook.imgs}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintextTitle">
        <Form.Label>Description</Form.Label>

        <Form.Control
          onChange={handleChange}
          name="description"
          type="textarea"
          placeholder="short summary"
          value={newBook.description}
        />
      </Form.Group>

      <div className="container text-center">
        <Row>
          <Col>
            {" "}
            <Button variant="primary" type="submit">
              Add Book
            </Button>
          </Col>

          <Col>
            <Button
              variant="outline-secondary"
              onClick={() => props.handleToggleBookForm()}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
}

export default NewBookForm;
