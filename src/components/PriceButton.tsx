import CurrencyIcon  from "../assets/icons/CurrencyIcon"

export default function PriceButton({ price, pricingType }:{price:number, pricingType:string}) {
  return (
    <span className="inline-flex items-center gap-1 h-8 px-2 py-1 pr-4 text-xs leading-4 rounded-md cursor-default bg-customGreen/5 border border-customGreen/20 text-black font-bold">
      <CurrencyIcon className="fill-customGreenDark stroke-customGreenDark" />
      {pricingType === 'money' && `${price} Kč`}
      {pricingType === 'free' && 'Zdarma'}
      {pricingType === 'negotiable' && 'Cena dohodou'}
      {pricingType === 'text' && 'V textu'}
      {pricingType === 'unknown' && 'Neuvedeno'}
    </span>
  )
}
