import Section from "../components/Section";
import AppLogo from "../assets/LogoDark.svg";

function Hero({ variant }) {
  return (
    <Section variant={variant}>
      <div className="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img className="h-8 w-auto sm:h-10" src={AppLogo} alt="" />
            <p className="mt-8 mb-12 text-2xl text-slate-50">
              Decentralized LaunchPad, Staking Protocol, Incubator, and DAO.
            </p>
            <div className="mt-4">
              <a
                href="/"
                className="px-8 py-4 border border-transparent text-base font-medium text-yellow-800 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:w-full"
              >
                Register for Private Sale
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
