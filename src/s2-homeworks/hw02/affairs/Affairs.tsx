import React, { Dispatch, SetStateAction } from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[] // need to fix any
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => {
        <Affair
        key={a._id}
        affair={a}
        deleteAffairCallback={props.deleteAffairCallback}/>
    })
    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
        
    }
    const setMiddle = () => {
        props.setFilter('middle')
        
    }
    const setLow = () => {
        props.setFilter('low')
        
    }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    } 

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')
    const setClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div>
        {mappedAffairs}
        <button onClick={setAll} className={cnAll}>All</button>
        <button onClick={setHigh} className={cnHigh}>High</button>
        <button onClick={setMiddle} className={cnMiddle}>Middle</button>
        <button onClick={setLow} className={cnLow}>Low</button>
        </div>
    )
}

export default Affairs;
