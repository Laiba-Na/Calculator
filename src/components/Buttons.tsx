import React from 'react'

const Buttons = () => {
  return (
    <div className='row-span-8 row-start-3 grid grid-cols-4 grid-rows-5 gap-1 font-jetbrains font-bold text-2xl w-full h-full place-items-center '>

        <button className='w-full h-full bg-Fourth text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>AC</button>
        <button className='w-full h-full bg-Fourth text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>DEL</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>√</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>+</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>1</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>2</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>3</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>-</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>4</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>5</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>6</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>*</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>7</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>8</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>9</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>/</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5 rounded-bl-md'>.</button>
        <button className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5 col-span-2'>0</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5 rounded-br-md'>=</button>
       
        
    </div>
  )
}

export default Buttons