import Section from "../components/Section";
import TiersDiagram from "../assets/TiersDiagram.svg";

function Col0() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="mb-8 text-yellow-400 font-semibold text-2xl underline">
          Tiers
        </h2>
        <p className="mb-4 text-slate-50">
          Participation in sales is run through a tier lottery system. Based on the amount of xFUEL you hold, you will be allocated to a tier. The higher the tier, the more lottery tickets you will receive. Therefore, the higher chance of being selected to participate in the sale, with a higher allocation.
        </p>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="flex items-center justify-center">
      <div className="px-16 md:px-8 lg:px-32">
        <img className="w-full" src={TiersDiagram} alt="" />
      </div>
    </div>
  );
}

function Tiers({ variant }) {
  return (
    <Section variant={variant} id="tiers">
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Col0 />
          <Col1 />
        </div>
      </div>
    </Section>
  );
}

export default Tiers;
