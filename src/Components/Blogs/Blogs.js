import React from "react";

const Blogs = () => {
  return (
    <div className="container text-white">
      <div className="border border-2 m-4">
        <h4>Difference between SQL and NoSQL database?</h4>
        <p>
          IN SQL database we can store out data in table form. And in NoSQl
          database we can store data in json like object form. NoSQl data's are
          flexible to change while SQL data's are not.
        </p>
      </div>
      <div className="border border-2 m-4">
        <h4>When should you use nodejs and when should you use mongodb?</h4>
        <p>
          MongoDB is a NoSQL database .We should use mongoDB to store data .
          Node.js is used to use, edit, calculate , manipulate the data and show
          data to UI in different forms. Node.js is a server side language
        </p>
      </div>
      <div className="border border-2 m-4">
        <h4>What is the purpose of jwt and how does it work?</h4>
        <p>
          A JWT is a mechanism to verify the owner of some JSON data. It's an
          encoded, URL-safe string that can contain an unlimited amount of data
          and is cryptographically signed. When a server receives a JWT, it can
          guarantee the data it contains can be trusted because it's signed by
          the source
        </p>
      </div>
    </div>
  );
};

export default Blogs;
