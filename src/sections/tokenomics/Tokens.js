import FuelToken from '../../assets/FuelToken.svg'
import XFuelToken from '../../assets/xFuelToken.svg'

function Tokens() {
  return (
    <div className="py-24">
      <h2 className="text-center text-slate-50 font-semibold text-2xl">Tokens</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className='p-16'>
          <img className="w-full" src={FuelToken} alt="" />
        </div>
        <div className='p-16'>
          <img className="w-full" src={XFuelToken} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tokens