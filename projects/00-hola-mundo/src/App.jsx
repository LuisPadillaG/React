import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    
    const [name, setName] = useState('midudev')

    console.log('render with name: ', name)
    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
                <strong>Miguel Angel</strong>
            </TwitterFollowCard>
            <TwitterFollowCard userName="luis">
                <strong>Hola y0</strong>
            </TwitterFollowCard>
            <button onClick={() => setName('pedromichel')}>
                Cambio nombre
            </button>
        </section>
    )
}