import React from 'react'
import s from './App.module.css'
// import HW4 from '../s2-homeworks/hw04/HW4'
// import HW3 from '../s2-homeworks/hw03/HW3'
import HW5 from "../s2-homeworks/hw05/HW5";
import HW6 from "../s2-homeworks/hw06/HW6";
import HW7 from '../s2-homeworks/hw07/HW7';
import HW8 from '../s2-homeworks/hw08/HW8';
import HW9 from '../s2-homeworks/hw09/HW9';
import HW10 from '../s2-homeworks/hw10/HW10';
import HW11 from '../s2-homeworks/hw11/HW11';
import HW12 from '../s2-homeworks/hw12/HW12';

function App() {
    return (
        <div className={s.App}>
            {/* <HW1/> */}
            {/*раскомментировать по ходу выполнения*/}
            {/* <HW2/> */}
            {/* <HW3/> */}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
            <HW6/>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
        </div>
    )
}

export default App
