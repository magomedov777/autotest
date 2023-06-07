import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0,100]))

    /*Две точки за счет  типизации <number[]> --внутри useState  и за счет стартового массива [0,100] --внутри useState*/

    const change = (event: Event, newValue: any) => {
       /* приходящее значение может быть числом или массивом с двумя числами*/
        if(Array.isArray(newValue)===true){
            setValue2(newValue)
        /*    НАДО СЭТАТЬ В ДВА ЮСТЭЙТА ЧТОБЫ ОДНОВРЕМЕННО ДВИГАЛИСЬ ДВА ПОЛЗУНКА (верхний и нижний)КОГДА ТЯНУ ЗА ОДИН */
            setValue1(newValue[0])
        }else {
            setValue1(newValue)
            /*если это число то я сэтаю число в два юстэйта и вдобавок сетаю значение двойного ползунка которое я не меняю в данной операции и это значение беру из юстэйта из массива из второго числа*/
            setValue2([newValue,value2[1]])
        }

        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
    }


    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            onChange={change}
                            value={value1}
                            id={'hw11-single-slider'}
                            valueLabelDisplay="auto"

                            //
                            // valueLabelDisplay="auto" покажет значение над кружком когда я до него курсором наведу
                            // сделать так чтоб value1 изменялось // пишет студент
                            /*атрибут value  это значение ползунка Я ПОЛЗУНОК ПОДОДВИНУ И ЗНАЧЕНИЕ ОТПРАВИЛОСЬ В ЮСТАТЕ И ОТТУДА ПРИШЛО В ЭТО ВЭЛЬЮ И ОТОБРАЗИЛОСЬ НА ОСНОВАНИЕ ЭТОГО ВЭЛЬЮ __ОТОБРАЗИЛОСЬ ИЗМЕНЕНИЕ РАСПОЛОЖЕНИЯ ПОЛЗУНКА СООТВЕТСТВЕННО ПРИШЕДШЕМУ ВЭЛЬЮ. и если прописать value={20} то захардкорится значение и не поменяешь его в браузере*/
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value2[0]}</span>
                       {/* это value2[0]  значение для левого  ползунка  на нижней линейки там где два ползунка */}
                        <SuperRange
                            value={value2}
                            onChange={change}
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент

                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                       {/* это value2[1]  значение для правого  ползунка  на нижней линейки там где два ползунка*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11