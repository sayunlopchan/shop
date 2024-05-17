import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Carousel = ({ data }) => {

  const [slide, setSlide] = useState(0);

  return (
    <div className='flex justify-center items-center h-[340px] w-[600px] relative rounded-lg m-auto overflow-hidden'>

      <BsArrowLeftCircleFill className='arrow absolute text-white left-2 hover:cursor-pointer hover:text-gray-400  ' size={30} />

      {data.map((item, id) => {
        return (
          <img src={item.src} alt={item.alt} key={id}
            className="h-full w-full rounded-lg" />
        )
      })}

      < BsArrowRightCircleFill className='arrow absolute text-white  right-2 hover:cursor-pointer hover:text-gray-400' size={30} />

    </div>
  )

}

export default Carousel