import Section from "../components/Section";
import IncubationDiagram from "../assets/IncubationDiagram.svg";

function Col0() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="mb-8 text-yellow-400 font-semibold text-2xl underline">
          Incubation Program
        </h2>
        <p className="mb-4 text-slate-50">
          The incubation program aims to help projects grow in awareness and
          credibility. The goal is to support the team in defining and
          implementing their value proposition.
        </p>
        <p className="mb-4 text-slate-50">
          A portion of the fees collected from these services will be
          distributed to xFUEL holders.
        </p>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="flex items-center justify-center">
      <div className="px-16 md:px-8 lg:px-32">
        <img className="w-full" src={IncubationDiagram} alt="" />
      </div>
    </div>
  );
}

function Incubation({ variant }) {
  return (
    <Section variant={variant} id="incubation">
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Col0 />
          <Col1 />
        </div>
      </div>
    </Section>
  );
}

export default Incubation;
