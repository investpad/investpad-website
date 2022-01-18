import Section from "../components/Section";
import StakingBenefits from "../assets/StakingBenefits.svg";

function Col0() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="mb-8 text-yellow-400 font-semibold text-2xl underline">
          Staking
        </h2>
        <p className="mb-4 text-slate-50">
          FUEL tokens are lockable for a selectable time (3 months, 6 months, 12
          months). By locking FUEL tokens in our staking contract, you will
          receive xFUEL, a non-transferable governance token.
        </p>
        <p className="mb-4 text-slate-50">
          The quantity of xFUEL received depends on the quantity of FUEL locked
          in staking and the duration of the lock. Holders will be able to
          unlock their FUEL early with a pro-rata penalty fee.
        </p>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="flex items-center justify-center">
      <div className="px-16 md:px-8 lg:px-32">
        <img className="w-full" src={StakingBenefits} alt="" />
      </div>
    </div>
  );
}

function Staking({ variant }) {
  return (
    <Section variant={variant} id="staking">
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Col0 />
          <Col1 />
        </div>
      </div>
    </Section>
  );
}

export default Staking;
