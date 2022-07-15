import React from "react";
import Button from "./components/Button";
import ContentBox from "./components/Content";
import "./styles.css";
const colorArray = [
  "#450560",
  "#0b7ab3",
  "#b30b58",
  "#0bb366",
  "#b3500b",
  "#E6B333",
  "#b30b16",
  "#3d3ef0",
  "#b6bc7b",
  "#dddafa",
  "#8feaff",
  "#ffa48f",
  "#ff8fd1",
  "#f3aa61",
  "#d4e155",
  "#8c5407",
  "rgb(7, 63, 140)",
  "#05612c",
  "#6666FF"
];
let color = "";
export default function App() {
  const [obj, setState] = React.useState({ quote: "", author: "" });
  function fetchData() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  function setData(data) {
    let index = Math.floor(Math.random() * (1643 - 1)) + 1;
    let colorindex = Math.floor(Math.random() * (19 - 0)) + 0;
    color = colorArray[colorindex];
    setState((prev) => {
      return {
        ...prev,
        quote: data[index].text,
        author: data[index].author
      };
    });
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="centerbox">
        <ContentBox color={color} data={obj} />

        <div className="btn-grp">
          <a
            className="button"
            style={{ backgroundColor: color }}
            href="https://twitter.com/"
            link="https://twitter.com"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            href="https://bumble.com/"
            style={{ backgroundColor: color }}
            className="button"
            link="https://bumble.com"
          >
            <i class="fa fa-tumblr"></i>
          </a>
          <Button text="Next Quote" color={color} getData={fetchData} />
        </div>
      </div>
    </div>
  );
}
