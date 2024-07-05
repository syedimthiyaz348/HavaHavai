import AirportDetails from "../AirportDetails";
import Header from "../Header";
import SideNavigation from "../SideNavigation";
import "./index.css";
import { createContext, useState } from "react";
import {MdClose} from 'react-icons/md';

/* Sample Data*/
const airportData = [
    {
        id : 1,
        name : "Indira Gandhi International Airport",
        Country : "India",
        Code : "DEL",
    },
    {
        id : 2,
        name : "Dubai International Airport",
        Country : "UAE",
        Code : "DXB",
        
    },
    {
        id : 3,
        name : "Heathrow Airport",
        Country : "England",
        Code : "LHR",
    },
    {
        id : 4,
        name : "Istanbul Airport",
        Country : "Turkey",
        Code : "IST",
    },{
        id : 5,
        name : "Rajiv Gandhi International Airport",
        Country : "Texas",
        Code : "DFW",
    },
]

export const ServiceData = createContext();

const Airport = () => {
  const [serviceData, setServiceData] = useState(airportData)
  const [addingAirport, setAddingAirport] = useState(false);
  const [airport, setAirport] = useState()
  const [country, setCountry] = useState()
  const [code, setCode] = useState()

  /* to Delete the Row of Airport */
  const deletingAirport = id => {
    let filteredData = serviceData.filter(each => each.id !== id)
    console.log(filteredData)
    setServiceData(filteredData)
  }

  /* to Show the Edit Menu*/
  const handlingAddNew = () => {
    setAddingAirport(true)
  }

  /* To add entered Data */
  const enteringAirportData = event => {
    setAirport(event.target.value)
  }

  const enteringcountryData = event => {
    setCountry(event.target.value)
  }

  const enteringCodeData = event => {
    setCode(event.target.value)
  }
   /* Collect the Data and add a column using the given data 
   even though data is not entered the the row is created with blank data */
  const submitingAllData = () => {
    const newAirport = {name: airport, Country:country, Code: code}
      setServiceData(prevState => [...prevState, newAirport])
      setAddingAirport(false);
  }

  /* By clicking the cross item it will close the add button */
  const onClosingaddMenu = () => {
    setAddingAirport(false)
  }

  return (
    <ServiceData.Provider value={serviceData}>
    <div>
      <Header />
      <div className="background">
        <SideNavigation />
        <div className="airport-view">
          <div className="airport-header">
            <h1>Airports</h1>
            <button onClick={handlingAddNew} className="add-new-button" >+Add new</button>
          </div>
          <table>
            <tr>
                <th className="checkbox"><input type="checkbox" /></th>
                <th>All Airports</th>
                <th>Country</th>
                <th>Code</th>
                <th>Terminals</th>
                <th></th>
                <th></th>
            </tr>
            {serviceData.map(eachDetail => (
              <AirportDetails airportDetail={eachDetail} deletingAirport={deletingAirport}/>
            ))}
          </table>
          {addingAirport && (
            <div className="adding-terminal">
              <MdClose onClick={onClosingaddMenu} className="close-button"/>
            <h1>Airport Data</h1>
            <p>Airport Name : <span><input onChange={enteringAirportData} type="text"/></span></p>
            <p>Country : <span><input onChange={enteringcountryData} type="text"/></span></p>
            <p>Country Code : <span><input onChange={enteringCodeData} type="text"/></span></p>
            <button onClick={submitingAllData}>Submit</button>
          </div>
          )}
        </div>
      </div>
    </div>
    </ServiceData.Provider>
  );
};

export default Airport;
