import React from 'react'

interface Prop
{
    children: React.ReactNode;
}

const CalculatorBaseCard = ({children} :Prop) => {
  return (
    <div className='bg-First  rounded-lg shadow-lg p-6 w-[400px] h-[500px] 2xl:w-[800px] 2xl:h-[1000px] xl:w-[600px] xl:h-[700px] max-sm:w-full max-sm:h-[350px]  m-20 justify-self-center '>
        {children}
    </div>
  )
}

export default CalculatorBaseCard