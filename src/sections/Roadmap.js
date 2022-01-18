import Section from "../components/Section"

const items = [
  {
    name: "Q1 2022",
    list: [
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
    ]
  },
  {
    name: "Q2 2022",
    list: [
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
    ]
  },
  {
    name: "Q3 2022",
    list: [
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
    ]
  },
  {
    name: "Q4 2022",
    list: [
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
      { name: "Item", status: false },
    ]
  },
  // {
  //   name: "Q1 2023",
  //   list: [
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //   ]
  // },
  // {
  //   name: "Q2 2023",
  //   list: [
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //   ]
  // },
  // {
  //   name: "Q3 2023",
  //   list: [
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //     { name: "Item", status: false },
  //   ]
  // },
]

function ListItem({ name, status }) {
  return (
    <li>{name}</li>
  )
}

function Item({ name, list }) {
  return (
    <div className="flex-none w-2/3 md:w-2/5 lg:w-1/4">
      <h4 className="text-slate-50 text-xl font-semibold">{name}</h4>
      <div className="mt-2 flex items-center">
        <div class="w-4 h-4 bg-slate-700 rounded-full" />
        <div class="w-full h-1 bg-slate-700" />
      </div>
      <ul class="mt-4 list-none text-slate-50">
        {list.map(({ name, status }, key) => <ListItem key={key} name={name} status={status} />)}
      </ul>
    </div>
  )
}

function Roadmap() {
  return (
    <Section variant="light">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mb-16 text-slate-50 text-2xl text-center underline font-semibold">Roadmap 2022</h2>
        <div class="overflow-x-auto flex pb-8">
          {items.map(({ name, list }, key) => <Item key={key} name={name} list={list} />)}
        </div>
      </div>
    </Section>
  )
}

export default Roadmap