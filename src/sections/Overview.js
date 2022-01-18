import Section from "../components/Section";

const items = [
  {
    name: "LaunchPad",
    text: "InvestPad lets you invest in seed, private sales, and public sales of the hottest projects.",
  },
  {
    name: "Staking",
    text: "Stake your tokens to get access to sales, earn fees, participate in governance, and more to come.",
  },
  {
    name: "Governance",
    text: "Through the InvestPad DAO, members are able to create proposals and vote on resolutions.",
  },
  {
    name: "Incubator",
    text: "The incubation program helps projects grow in awareness and credibility through mentoring.",
  },
];

function Item({ name, text }) {
  return (
    <div className="bg-slate-800 p-8">
      <h4 className="text-yellow-400 text-xl font-semibold">{name}</h4>
      <p className="text-slate-50">{text}</p>
    </div>
  );
}

function Overview() {
  return (
    <Section variant="darkToLight">
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ name, text }, key) => (
            <Item key={key} name={name} text={text} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Overview;
