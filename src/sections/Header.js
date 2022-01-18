import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import AppIcon from '../Icon.svg'

function Logo() {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <a href="/">
        <span className="sr-only">Workflow</span>
        <img
          className="h-8 w-auto sm:h-10"
          src={AppIcon}
          alt=""
        />
      </a>
    </div>
  );
}

function PopoverButton() {
  return (
    <div className="-mr-2 -my-2 md:hidden">
      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
    </div>
  );
}

const items = [
  { name: "Crowdfunding", href: "#crowdfunding" },
  { name: "Staking", href: "#staking" },
  { name: "Governance", href: "#governance" },
  { name: "Incubation", href: "#incubation" },
  { name: "Tokenomics", href: "#tokenomics" },
];

function ItemLink({ name, href }) {
  return (
    <a
      href={href}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {name}
    </a>
  );
}

function ItemLinks() {
  return (
    <nav className="hidden md:flex space-x-10">
      {items.map(({ name, href }, key) => <ItemLink key={key} name={name} href={href} />)}
    </nav>
  )
}

function TransitionPanel() {
  return (
    <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={AppIcon}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50">
    <Popover className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Logo />
          <PopoverButton />
          <ItemLinks />
          <TransitionPanel />
        </div>
      </div>
    </Popover>
    </header>
  );
}

export default Header;
