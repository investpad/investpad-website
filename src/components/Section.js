function getColors(variant) {
  switch (variant) {
    case "light":
      return "bg-slate-800"
    case "lightToDark":
      return "bg-gradient-to-b from-slate-800 to-slate-900"
    case "darkToLight":
      return "bg-gradient-to-b from-slate-900 to-slate-800"
    default:
      return "bg-slate-900"
  }
}

function Section ({ children, variant }) {
  
  const colors = getColors(variant)

  return (
    <section className={`py-24 ${colors}`}>{children}</section>
  )
}

Section.defaultProps = {
  variant: "dark"
}

export default Section