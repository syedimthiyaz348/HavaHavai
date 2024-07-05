import { RiPencilFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";
const AirportDetails = (props) => {
  const { airportDetail, deletingAirport } = props;
  const { id, name, Country, Code } = airportDetail;
  const handlingDelete = () =>{
    deletingAirport(id)
  }
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>

      <td>
        <Link to={`/airport/${name}`}>{name}</Link>
      </td>

      <td>{Country}</td>
      <td>{Code}</td>
      <td></td>
      <td>
        <RiPencilFill />
      </td>
      <td>
        <MdDeleteForever onClick={handlingDelete} />
      </td>
    </tr>
  );
};

export default AirportDetails;
