import './button.css'

export default function Button ({value, styleClass}) {
  return(
  <button type='button' className={styleClass}>{value}</button>
  )
};