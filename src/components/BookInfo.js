import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
function BookInfo() {
  const selectedBook = useSelector((state) => state.selectedBook);
  // Loose check if given url is a valid img url
  // https://stackoverflow.com/questions/9714525/javascript-image-url-verify
  const isValidImgUrl = (img) => {
    return img.toLowerCase().match(/[^/]+(jpg|png|gif)$/) !== null;
  };

  // Use placeholder image if invalid image url because
  // I want the click handler on the image and we need something bigger to click
  const img =
    selectedBook && isValidImgUrl(selectedBook.img)
      ? selectedBook.img
      : "https://www.zumlume.com/assets/frontend/images/default-book.png";

  return (
    <div className="book-info-container">
      {selectedBook ? (
        <>
          <Card style={{ width: "32rem" }}>
            <Card.Img className="card-img" variant="top" src={img} />
            <Card.Body className="card-body">
              <Card.Title>{selectedBook.title}</Card.Title>
              <Card.Text>{selectedBook.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              By {selectedBook.author}
            </Card.Footer>
          </Card>
        </>
      ) : (
        <div className="text-muted">
          <h5>Choose any book from the list to view its details</h5>
          <i class="fas fa-book fa-2x"></i>
        </div>
      )}
    </div>
  );
}

export default BookInfo;
