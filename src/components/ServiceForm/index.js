import Header from "../Header";
import SideNavigation from "../SideNavigation";
import {Link, useParams } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { Switch, Button } from "@adobe/react-spectrum";

const Terminals = [
  {
    title: "Terminal 1",
    description: "Optional Metadata should be two lines",
    imageUrl:
      "https://cdn3.vectorstock.com/i/1000x1000/24/27/people-group-avatar-character-vector-12392427.jpg",
  },
  {
    title: "Terminal 2",
    description: "Optional Metadata should be two lines",
    imageUrl:
      "https://cdn3.vectorstock.com/i/1000x1000/24/27/people-group-avatar-character-vector-12392427.jpg",
  },
];

const ServiceForm = () => {
  const params = useParams();
  const { name } = params;
  const [TerminalList, setTerminalsList] = useState(Terminals);
  const [terminalName, setTerminalName] = useState();
  const [terminalDes, setTerminalDes] = useState();
  const [openAdd, setOpenAdd] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const handlingAddButton = () => {
    setOpenAdd(true);
  };

  const handlingCancelButton = () => {
    setOpenAdd(false);
  };

  const enteringTerminalName = (event) => {
    setTerminalName(event.target.value);
  };

  const enteringTerminalDescription = (event) => {
    setTerminalDes(event.target.value);
  };

  const handlingContinue = () => {
    const terminalValues = {
      title: terminalName,
      description: terminalDes,
      imageUrl:
        "https://cdn3.vectorstock.com/i/1000x1000/24/27/people-group-avatar-character-vector-12392427.jpg",
    };
    setTerminalsList((prevState) => [...prevState, terminalValues]);
    setOpenAdd(false);
  };

  const onClickTerminal = () => {
    setOpenServices(true);
  };

  return (
    <div>
      <Header />
      <div className="background">
        <SideNavigation />
        <div className="airport-view">
          <div>
            <p><Link to='/airport'>Airport</Link> &gt; {name}</p>
            <h1>{name}</h1>
          </div>
          <div className="tabs">
            <button>Terminals</button>
            <button>Transport</button>
            <button>Contact details</button>
          </div>
          <hr />
          <div>
            <div className="terminals-container">
                {TerminalList.map((eachTerminal) => (
                    <div onClick={onClickTerminal}className="each-terminal">
                    <img
                      className="group-image"
                      src={eachTerminal.imageUrl}
                      alt="Terminal Image"
                    />
                    <div className="terminal-data">
                      <h1>{eachTerminal.title}</h1>
                      <p>{eachTerminal.description}</p>
                    </div>
                  </div>
                ))}
              <button onClick={handlingAddButton}>+Add Terminal</button>
              
            </div>
            {openServices && (
              <div>
                <h1>Services</h1>
                <p>Lost & found</p>
                <hr />
                <form className="inputs-container">
                  <div>
                    <label>ServiceName</label>
                    <br />
                    <input type="text" value="Lost & found" />
                  </div>
                  <div>
                    <label>Category</label>
                    <br />
                    <select>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <div>
                    <label>Sub Category</label>
                    <br />
                    <select>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <div>
                    <input type="file" />
                  </div>
                  <div>
                    <input id="checkbox" type="checkbox" />
                    <label htmlFor="checkbox">Show Image</label>
                  </div>
                  <div>
                    <label>Description</label>
                    <br />
                    <input type="text" placeholder="type here" />
                  </div>
                  <button className="save-button">Save</button>
                </form>
                <div>
                  <p>Lounge</p>
                  <hr />
                </div>
                <div>
                  <p>Money Exchange</p>
                  <hr />
                </div>
              </div>
            )}
            {openAdd && (
              <div className="adding-terminal">
                <h1>Add New Terminal</h1>
                <input
                  onChange={enteringTerminalName}
                  placeholder="Terminal 1"
                  type="text"
                  className="edit-terminal-input"
                />
                <textarea
                  onChange={enteringTerminalDescription}
                  className="edit-terminal-text-area"
                  rows="5"
                />
                <div>
                  <input type="file" />
                  <button onClick={handlingCancelButton}>Cancel</button>
                  <button onClick={handlingContinue}>Continue</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
