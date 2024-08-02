import React, {useState} from 'react'
import Layout from '../Layout'
import MainHeader from '../MainHeader'
import { postData } from '../../Data/Data'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <div className='w-[80%] mx-auto py-10'>
            <MainHeader>
                About our Organisation
            </MainHeader>
            <p className='text-sm leading-6 text-slate-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos suscipit enim, harum aperiam dolor quam voluptatem provident ipsam. Similique, fugit quasi neque animi error quisquam soluta modi maxime iste commodi cumque voluptatibus quas quis, ipsa recusandae architecto mollitia facere aperiam natus atque harum incidunt vel eaque! Saepe, aliquid deserunt! Esse eius perspiciatis, laboriosam eum ullam totam magni! Nisi corrupti consectetur excepturi veritatis, hic labore natus ipsa doloremque harum asperiores nihil aperiam molestiae quis aspernatur pariatur quos porro ullam, eaque consequuntur. Nobis esse veniam neque voluptatem voluptatum cupiditate aliquid ullam necessitatibus porro nam aliquam unde accusantium laudantium cumque sit, similique nihil libero mollitia magni expedita quibusdam eaque quos! Placeat commodi magni dolorem inventore aut ea dolor ipsam officiis quaerat numquam, neque facere sequi possimus ab. Minima itaque deleniti eligendi magni! Tempore quidem atque sapiente ea consequatur dolorem magni dolorum libero vero laborum, tempora quo optio? Debitis, eum vero fugit fugiat animi vel molestias sequi et minima, ex similique? Quae rem odio tenetur sit optio minima repellat nulla. Iste architecto blanditiis quod reiciendis illum! Totam ducimus recusandae delectus laborum perspiciatis eius. Provident rerum tempora facere voluptatum recusandae sit optio nam rem sapiente voluptas nisi perspiciatis culpa alias asperiores iure, aliquid id!
            </p>
        </div>
        <div className='w-[80%] mx-auto py-10'>
            <MainHeader>
                All of out trums and condition 
            </MainHeader>
            <p className='text-sm leading-6 text-slate-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, mollitia magni nemo debitis harum quaerat voluptate dicta est sequi veritatis velit, adipisci non! Consequuntur, optio laudantium ex ad minus architecto facere quo pariatur beatae hic nobis possimus est inventore provident ullam fugit aut ratione! Consequatur vitae voluptates exercitationem sint aperiam pariatur explicabo nobis amet culpa natus magni labore mollitia maiores perferendis, saepe corporis est fugit iusto voluptate! Quo, saepe. Expedita fugiat facilis fugit voluptatum architecto eius dicta corporis voluptates unde animi. Ducimus, velit inventore. Odit necessitatibus asperiores aut molestias accusantium sequi, quae blanditiis unde esse ratione beatae earum nisi sit iusto recusandae ullam dignissimos repellendus quibusdam aliquam quam saepe iure. Quod ratione illo cumque ducimus quae, ad tempore commodi ullam. Perspiciatis veniam maxime temporibus tempore illum porro vel repellendus quaerat. Facilis deserunt laboriosam a harum optio ipsum quaerat non earum eligendi aliquid, nisi quo repellat ratione impedit consectetur iusto dolor.
            </p>
        </div>
        <div className='w-[80%] mx-auto py-10'>
            <MainHeader>
                Some recent post 
            </MainHeader>
            <div className=''>
                {/* all psots */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10'>
                    
                    {
                        postData.map((item, index)=>(
                            <Link to={"/post"} state={index}>
                                <div key={index} className='min-h-[80px] bg-slate-300 rounded-lg p-3 grid grid-cols-[1fr_3fr] items-center justify-center gap-3'>
                                {/* image section */}
                                <div>
                                    <img src={item.img} alt="img" className='w-[60px] h-[60px] object-cover' />
                                </div>
                                {/* text section */}
                                <div className=''>
                                    <h1 className='text-xl font-semibold py-1'>{item.name}</h1>
                                    <p className='text-sm text-slate-800 line-clamp-1'>{item.text}</p>
                                    <button className='text-md font-bold py-1'>learn more</button>
                                </div>
                            </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
