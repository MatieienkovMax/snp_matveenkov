import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import IMG from 'gatsby-image'



const Qestions = () => (
    <>
    
    <section className='qestions'>
    <h3 className='qestions_title'>Часто задоваемые вопросы </h3>
        <input type="checkbox" 
                name="rove" 
                id="qestions_one_bottum" 
                className='qestions_bottum'/>

          <label   for="qestions_one_bottum">
                  <h5 className="qvetion_title">
                    Сколько раз в день нужно заниматься?&darr;
                  </h5>
          </label>
         <div className='qestion_one_diskription' >
                Один, два раза в день, желательно перед сном , до еды . Важна регулярность .
         </div>   
         <input type="checkbox" 
                name="rove"     
                id="qestions_two_bottum" 
                className='qestions_bottum'/>
          <label    for="qestions_two_bottum">
                  <h5 className="qvetion_title">	
                    Сколько минут можно "висеть" на тренажере?	&darr;
                  </h5>
          </label>
         <div className='qestion_two_diskription'>
         Время и угол наклона мы рекомендуем выбирать по самочувствию, от 2х до 5 минут,
          главное регулярность, После виса необходимо лечь на 30 мин,
          а идеально делать растяжку перед сном .
         </div>
         <input type="checkbox" 
                name="rove" 
                id="qestions_tree_bottum" 
                className='qestions_bottum'/>

          <label   for="qestions_tree_bottum">
                  <h5 className="qvetion_title">
                   Есть ли гарантия на ваши товары?	&darr;
                  </h5>
          </label>
         <div className='qestion_tree_diskription'>
         На металлический корпус инверсионного стола мы даем гарантию 3 года.
         </div>
         <input type="checkbox" 
                name="rove" 
                id="qestions_for_bottum" 
                className='qestions_bottum'/>

          <label   for="qestions_for_bottum">
                  <h5 className="qvetion_title">
                  Есть ли противопоказания для занятий ?	&darr;
                  </h5>
          </label>
         <div className='qestion_for_diskription'>
                        Да, есть:<br />
                глаукома;<br />
                гипертоническая болезнь 2 ст.;<br />
                аритмия;<br />
                аневризмы сосудов головного мозга;<br />
                церебросклероз;<br />
                хронические соединительнотканные заболевания;<br />
                ИБС в приступном периоде;<br />
                старческая деменция;<br />
                вентральные грыжи;<br />
                протезированные суставы;<br />
                инвертофобии;<br />
                отслоение сетчатки глаза;<br />
                <br />

                Перед использованием проконсультируйтесь со специалистом!
         </div>       
   </section>
   </>
)


export default Qestions;