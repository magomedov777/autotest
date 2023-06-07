import React, {ChangeEvent, useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    const dispatch = useDispatch()
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
    // взять ид темы из редакса
    /* const themeId = 1*/
    const change = (id: any) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
       /* тут сэтается именно число-айдинка --сэтается напрямую в ДОМ и далее на основании этой айдишки-числа  подтянутся стили которые прописаны в файле HW12.module.css*/
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <h4>Выберите тему</h4>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={change}
                    // onChange={change}-это бесполезно передавть  ибо в SuperSelect этот атрибут не //ожидается и не обрабатывется


                    // сделать переключение тем
                    /*  options={[1,2,3]} сделало что выпадающий список стал состоять из трех пустых ячеек-БЕЗ ЭТОГО АТРИБУТА ВАПОДАЛА при нажатии на стрелку  ОДНА ПУСТАЯ ЯЧЕЙКА
                    * options={themes} ----themes этот массив выше описан---теперь выподающий список из трех ячеек и в каждой ячейке разные слова
                    * */
                />
            </div>
        </div>
    )
}

export default HW12