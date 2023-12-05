import {ReactNode} from 'react'
interface Props {
    title :string;
    subTitle :string;
    icon :ReactNode;
}
const ExperinceCard = ({title,subTitle,icon}:Props) => {
  return (
    
        <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-ceter justify-center">
        <span className='text-2xl'>{icon}</span>
        </span>
        <div>
          <h3 className ='text-2xl font-bold'>{title}</h3>
          <p className="text-base tracking-wide font-me text-gray-500">{subTitle}</p>
        </div>
      </div>
  
  )
}

export default ExperinceCard
