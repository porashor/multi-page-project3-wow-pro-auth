import React, { useState } from 'react'
import Layout from '../Layout'
import { postData } from '../../Data/Data'
import MainHeader from '../MainHeader'
import { FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router'

const Post = () => {
  
  const location = useLocation()
  const index = location.state || 0
  console.log(index)
  const [pageN, setPageN] = useState(index)
    const data = postData[pageN]
    console.log(data)
    function next(){
      if(pageN <3 ){
        setPageN((a)=>(a+1))
      }
    }
    function prev(){
      if(pageN >0 ){
        setPageN((a)=>(a-1))
      }
    }
  return (
        <div className='w-[80%] mx-auto py-10 transition-all duration-500'>
          <MainHeader>
            {data.name}
          </MainHeader>
          {/* image section */}
          <div className='flex items-center justify-center p-10'>
            <img src={data.img} alt="" className='w-[350px]' />
          </div>
          <div className='text-lg font-semibold py-5'>
            {data.text}
          </div>
          <div className='leading-6 text-sm text-slate-800 py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem possimus delectus similique nesciunt necessitatibus, sunt illo assumenda cum iusto provident eligendi, suscipit dignissimos recusandae eaque et a id unde odit! Sunt aut veritatis maiores eaque beatae fuga, in enim debitis a tenetur. Atque eligendi veritatis vel, ratione, deserunt quasi modi quam aspernatur corporis hic repellendus necessitatibus natus cupiditate aut pariatur suscipit asperiores sed iste amet temporibus doloremque voluptatibus. Laborum magni enim aliquid, numquam mollitia vitae suscipit iste earum, fugiat sapiente fugit. Obcaecati ut sit nihil laudantium sequi sint, cum itaque. Nihil dignissimos officia adipisci omnis iusto odio optio, fugit nisi autem soluta. Quia minima repellat temporibus dolores voluptatibus quisquam quas alias voluptas qui! Provident, illum iure soluta et beatae quas non, doloremque praesentium, vero corporis eaque architecto accusantium odio. Quos praesentium repudiandae saepe autem suscipit id fugiat officia et temporibus? Unde sit labore porro odit ducimus, modi repudiandae laboriosam voluptates! Vel velit rerum ducimus ut placeat consectetur eaque sed modi reprehenderit sequi nemo voluptatem, optio repudiandae. Aliquam officiis itaque voluptatibus, ipsa ab in soluta. Neque adipisci facilis magnam dolore, et, quaerat nemo, praesentium perferendis quod enim mollitia distinctio dolorem dolores nihil impedit dolor accusamus tempora eos? Consequuntur ad, veritatis numquam aut consequatur odit modi, nisi nam minima soluta eaque! Est totam facilis temporibus quas, maiores vitae ea! Labore corporis eum at unde alias, vitae voluptas voluptatibus quisquam nobis ipsam natus atque magnam dolore debitis, necessitatibus qui id perspiciatis enim quo est hic ad! Delectus facere, magnam non deserunt ea enim accusamus maiores nisi corrupti! Voluptates earum nesciunt blanditiis quibusdam dolor enim cum deserunt. Aliquid earum modi minima, amet harum eos quam tenetur doloribus, dolore corrupti delectus sed quia, necessitatibus totam repellendus mollitia? Dolorum debitis suscipit obcaecati qui, magnam error ad aperiam rem quasi? Pariatur exercitationem quidem iure totam, error rerum. Veritatis corporis officia dignissimos inventore. Fuga voluptatum tenetur iste vitae, dolores distinctio atque dolorum aliquam autem recusandae vel eum incidunt, maiores, optio eveniet odit laudantium amet. Ullam hic minima voluptates labore voluptate praesentium sit amet est voluptatibus, officiis impedit neque eveniet pariatur velit ipsa placeat excepturi natus inventore, iste in explicabo. Neque facere dolorem magnam, quae ea vero explicabo est id voluptatibus sapiente quibusdam sunt blanditiis iure voluptate minima possimus incidunt molestias. Quae porro sequi velit molestiae esse nostrum, eum aliquid necessitatibus doloribus aliquam, quod ratione? Aut perspiciatis asperiores tenetur dicta vitae tempora sint nam neque quas quae blanditiis eius possimus tempore deserunt animi nemo corrupti iusto incidunt, magni debitis facere illo placeat! Numquam neque vel dolores aliquam magnam, quidem fuga nemo rerum labore cumque ullam tempore amet illo, dolorem, nulla doloribus natus placeat! Voluptates, consectetur temporibus fugiat architecto voluptas, cumque culpa vitae reprehenderit necessitatibus sint laborum repellat amet. Neque eaque molestias iure ullam distinctio quisquam sint accusamus consequatur nam veritatis quibusdam, amet totam nemo pariatur possimus quos temporibus illo aliquid facilis nisi? Amet unde quidem quo error perspiciatis odio? Maxime ipsa fugiat accusamus, ratione quod aspernatur consectetur culpa recusandae natus reprehenderit? Maxime, minus maiores modi beatae aliquam debitis?
          </div>
          {data.time}
          <div>
            <span className='text-xl text-slate-900 font-semibold'>
              Auther Name: {data.author}
            </span>
          </div>
          <div className='flex items-center gap-2 py-3'>
            {data.star.map((item, index)=>(
              <div className='' key={index}>
                <FaStar className='text-yellow-500 text-xl'/>
              </div>
            ))}
          </div>
          <div className='flex gap-4'>
          <button className='text-xl font-semibold px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={prev}>Prev.</button>
          <button className='text-xl font-semibold px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={()=>setPageN(0)}>1</button>
          <button className='text-xl font-semibold px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={()=>setPageN(1)}>2</button>
          <button className='text-xl font-semibold px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={()=>setPageN(2)}>3</button>
          <button className='text-xl font-semibold px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={()=>setPageN(3)}>4</button>
          <button className='text-xl font-semibold px-5 py-2 bg-blue-500 text-white rounded-lg' onClick={next}>Next.</button>
          </div>
        </div>
  )
}

export default Post
