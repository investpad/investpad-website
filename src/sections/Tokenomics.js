import Section from "../components/Section";
import Tokens from "./tokenomics/Tokens";

function Tokenomics({ variant }) {

  return (
    <Section variant={variant}>
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-slate-50 font-semibold text-2xl underline">Tokenomics</h2>
        <Tokens />
      </div>
    </Section>
  )

}

export default Tokenomics