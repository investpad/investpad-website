import "./App.css";
import Crowdfunding from "./sections/Crowdfunding";
import Governance from "./sections/Governance";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Incubation from "./sections/Incubation";
import Overview from "./sections/Overview";
import Roadmap from "./sections/Roadmap";
import Staking from "./sections/Staking";

function App() {
  return (
    <>
      <Header />
      <Hero variant="dark" />
      <Overview variant="darkToLight" />
      <Roadmap variant="light" />
      <Crowdfunding variant="lightToDark" />
      <Staking variant="dark" />
      <Governance variant="darkToLight" />
      <Incubation variant="light" />
    </>
  );
}

export default App;
