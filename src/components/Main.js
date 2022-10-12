import React from 'react'
// import One from '../images/1.png'
// import Two from '../images/2.png'
// import Three from '../images/3.png'
// import Four from '../images/4.png'
// import Five from '../images/5.png'
// import Six from '../images/6.png'
// import Seven from '../images/7.png'


const Main = () => {
  return (
    <>
    <div className='mt-8 flex flex-wrap w-4/5 min-h-screen   '>
        <div>
    <img className='w h-24 md:w-64 md:h-auto md:rounded-none rounded-full mx-auto' src={One} alt='onesmile' /> </div>
    <div>
    <img className='w h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto' src={Two} alt='twosmile' />
    </div>
    <div>
    <img className='w h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto' src={Three} alt='threesmile' />
    </div>
    <div>
    <img className='w h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto' src={Four} alt='foursmile' />
    </div>
    <div>
    <img className='w h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto' src={Five} alt='fivesmile' />
    </div>
    <div>
    <img className='w h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto' src={Six} alt='sixsmile' />
    </div>
     <div>
    <img className='w h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto' src={Seven} alt='sevensmile' />
        </div>
    </div>
    </>
  )
}

export default Main