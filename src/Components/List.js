import React from "react";

const List = () => {
  const data = [
    {
      name: "first",
      icon: "icon",
    },
    {
      name: "second",
      icon: "icon",
    },
    {
      name: "third",
      icon: "icon",
    },
  ];
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.icon}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
