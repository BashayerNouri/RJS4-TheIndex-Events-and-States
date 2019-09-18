import React from "react";
// import authors from "./data";

function AuthorDetail(props) {
  let bookList = [];
  if (props.author) {
    bookList = props.author.books.map(book => (
      <>
        <tr>
          <td>{book.title}</td>
          <td>
            {props.author.first_name} {props.author.last_name}
          </td>

          <td>
            <button className="btn" style={{ backgroundColor: book.color }} />
          </td>
        </tr>
      </>
    ));
  }

  return (
    <div className="author col-xs-10">
      <div>
        <h3>{props.author.first_name}</h3>
        <img
          src={props.author.imageUrl}
          className="img-thumbnail"
          alt="I SHOULD BE AN AUTHOR NAME TOO"
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </div>
  );
}

export default AuthorDetail;
