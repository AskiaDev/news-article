import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div className="list-box">
      <ul className="list">
        {props.items.map((data) => {
          return (
            <ListItem
              onCheckedBoxChange={props.onCheckedBoxChange}
              key={data.article_id}
              dummyData={data}
              onReadFull={props.onReadFull}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
