import { useState } from "react";

function Sidebar() {
  const colorArray = ["blue", "red", "yellow"];

  const [colors, setColors] = useState(colorArray);
  const [name, setName] = useState("Ginny");

  return (
    <div className='sidebar'>
      <h1>{name}</h1>
      <button onClick={() => setName("greyson")}>change name</button>
      <button onClick={() => setName("Ginny")}>change name</button>
      {colors.map((color) => {
        return <p style={{ color: color, marginLeft:"10px"  }}>{color}</p>;
      })}
    </div>
  );
}

export default Sidebar;

