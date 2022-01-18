import Section from "../components/Section";
import LogoDark from "../assets/LogoDark.svg";

function Col0() {
  return (
    <div>
      <img src={LogoDark} alt="" className="h-8" />
      <h4 className="text-slate-50 text-xl my-8 font-semibold">
        Legal Disclaimer
      </h4>
      <p className="text-slate-500 text-xs">
        None of the information on this website should be construed as providing
        legal or financial advice. Please note there are always risks associated
        with smart contracts. Please use at your own risk. The team is not a
        registered broker, analyst or investment advisor. If you have purchased
        the token, you agree that you are not purchasing a security or
        investment. The team can not be held liable for any losses or taxes you
        may incur. Do conduct your own due diligence and consult your financial
        advisor before making any investment decision.
      </p>
      <p className="text-slate-500 mt-8 text-xs">
        © Copyright 2022. All rights reserved.
      </p>
    </div>
  );
}

function Col1() {
  return (
    <div></div>
  )
}

function Footer({ variant }) {
  return (
    <Section variant={variant}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4">
          <Col0 />
          <Col1 />
        </div>
      </div>
    </Section>
  );
}

export default Footer;
