import Section from "../components/Section";
import GovernanceDiagram from "../assets/GovernanceDiagram.svg";

function Col0() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="mb-8 text-yellow-400 font-semibold text-2xl underline">
          Governance
        </h2>
        <p className="mb-4 text-slate-50">
          Governance will be managed through decentralized on-chain voting. This
          will be enabled through a decentralized autonomous organization (DAO).
        </p>
        <p className="mb-4 text-slate-50">
          As a holder of xFUEL, you will be able to create proposals and vote.
          Your vote rights will be proportional to the amount of xFUEL tokens
          held at the time of vote. The governance will be in charge of the
          Treasury.
        </p>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="flex items-center justify-center">
      <div className="px-16 md:px-8 lg:px-32">
        <img className="w-full" src={GovernanceDiagram} alt="" />
      </div>
    </div>
  );
}

function Governance({ variant }) {
  return (
    <Section variant={variant} id="governance">
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Col0 />
          <Col1 />
        </div>
      </div>
    </Section>
  );
}

export default Governance;
