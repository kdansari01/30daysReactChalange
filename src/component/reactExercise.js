// Build Search filter in React

import React, { useState } from "react";

const search = () => {
  const [posts, setPosts] = useState(list);
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
  const searchHandle = (e) => {
    // setPosts(e.target.value);
    const result = list.filter((items) =>
      items.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setPosts(result);
  };

  return (
    <>
      <div>
        <input placeholder="search here......" onChange={searchHandle} />
      </div>
      <div>
        {posts &&
          posts.map((item, index) => (
            <div key={index}>{item}</div> //Display each item
          ))}
      </div>
    </>
  );
};
export default search;
