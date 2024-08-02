import React from 'react'
import Button from '../Button'
import { service } from '../../Data/Data'

const Service = () => {
  return (
    <div>
        <div className='bg-blue-900 text-white py-10'>
            <div className='w-[80%] mx-auto py-5 min-h-[350px] flex flex-col items-center justify-center gap-10 text-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold '>
                    There is effective service for you
                </h1>
                <p className='text-sm text-slate-400 text-center leading-6 line-clamp-6 py-2'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel debitis reprehenderit voluptatem, ea quisquam atque aliquam repudiandae ex ad beatae fugit expedita voluptate voluptatum quidem eum, laborum nostrum fugiat delectus harum minima quis dolores neque saepe dolorum! Hic ipsum nulla, impedit, necessitatibus ab, quaerat porro nobis quia veritatis explicabo eum perferendis quibusdam fuga? Sint aperiam dolore id provident velit sit odio at distinctio est autem, blanditiis explicabo, aliquam libero necessitatibus obcaecati voluptatum nesciunt quod. Est perferendis libero repudiandae quos provident dolor. Nisi facere eum dolorum, consequuntur et accusantium ex. Maxime pariatur quo error inventore magni exercitationem omnis doloremque dolorum excepturi, modi reiciendis alias illum, nihil aspernatur. Repudiandae sed accusantium velit facere eligendi blanditiis rem ullam debitis nulla fugit, cum, inventore exercitationem magnam earum unde tempore aut possimus porro nesciunt esse doloremque consequuntur? Repudiandae reiciendis nemo cupiditate veritatis natus, quam quia, officiis ipsa magnam culpa qui dolores eveniet. Quis beatae ipsa, quibusdam ab dignissimos nihil earum porro ea sapiente atque praesentium consequuntur quae fuga esse eaque odit accusantium repudiandae maxime aperiam hic dolores voluptas dicta! Quos molestias, magni, totam earum maxime aliquid culpa assumenda alias expedita illo beatae ipsa est deleniti iure impedit fugit provident quisquam omnis fugiat sapiente, molestiae aut.
                </p>
                <Button>
                    Try Later
                </Button>
            </div>
        </div>
        <div className='w-[80%] mx-auto py-10'>
            <div className='grid items-center justify-between gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {/* offers */}
                {
                    service.map((item, index)=>(
                        <div key={index} className='min-h-[350px] bg-slate-400/80 border border-slate-500 rounded-lg hover:scale-105 transition-all duration-500 p-2 flex flex-col gap-5 justify-center
                        '>
                            <div className={`text-center font-semibold text-2xl py-3 text-${item.color} `}>{item.name}</div>
                            <div className='flex items-center justify-between gap-4 text-xl font-semibold py-1'>
                                <div>Page :</div>
                                <div>{item.page}</div>
                            </div>
                            <div className='flex items-center justify-between gap-4 text-xl font-semibold py-1'>
                                <div>Time :</div>
                                <div>{item.time}</div>
                            </div>
                            <div className='flex items-center justify-between gap-4 text-xl font-semibold py-1'>
                                <div>Revision :</div>
                                <div>{item.revesion}</div>
                            </div>
                            <div className='text-5xl text-center font-bold'>
                                {item.price}
                            </div>
                            <Button>
                                Get Now
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Service
