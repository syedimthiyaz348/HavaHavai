import SideNavigation from "../SideNavigation";
import Header from "../Header";
import "./index.css";
const Home = () => (
  <div>
    <Header />
    <div className="background">
      <SideNavigation />
      <article className="article">
      <h1>This is Home Page</h1>
      <p> Click to the <b>Airports</b> it will navigate to Airports menu. </p>
      <p> In the Airports Menu by clicking on the <b>Airport Name</b> it will navigate to terminals. </p>
      <p> On Clicking on the <b>Terminal</b> it will open the <b>Service</b> Menu.</p>
      <p> In the <b>Airport</b> Menu user can add new Airport details by Clicking <b>Add New</b> Button and we can Delete the Airport row By clicking on the <b>Delete</b> icon.</p>
      <p>We can add New Terminals by clicking to the <b>Add Terminal Button</b></p>
      <p>Not Used <b>adobe spectrum design system</b>,Because of getting more <b>errors</b> and not supporting.</p>
      </article>
    </div>
  </div>
);

export default Home;
