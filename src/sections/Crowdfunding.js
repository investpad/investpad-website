import Section from "../components/Section";
import FundingTriangle from "../assets/FundingTriangle.svg";

function Col0() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="mb-8 text-yellow-400 font-semibold text-2xl underline">
          Crowdfunding Pools
        </h2>
        <p className="mb-4 text-slate-50">
          Crowdfunding is the practice of funding a project by raising small
          amounts of money from a large number of people.
        </p>
        <p className="mb-4 text-slate-50">
          Our core offering is to connect our community to projects looking to
          raise funds. Typically, we help projects throughout their complete
          funding lifecycle, allowing the community to participate in the early
          stage of seed funding and also in private/public sales.
        </p>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="flex items-center justify-center">
      <div className="px-16 md:px-8 lg:px-32">
        <img className="w-full" src={FundingTriangle} alt="" />
      </div>
    </div>
  );
}

function Crowdfunding({ variant }) {
  return (
    <Section variant={variant} id="crowdfunding">
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Col0 />
          <Col1 />
        </div>
      </div>
    </Section>
  );
}

export default Crowdfunding;
