import { useEffect, useState } from 'react'


function Location() {
    const [currentTime, setCurrentTime] = useState('')
    
    useEffect(() => {
    
        const updateTime = () => {
            const data = new Date()
            
            const hours = data.toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        
            setCurrentTime(hours)
        }

        updateTime()

        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

  return (
    <div className='time'>
        <p className='local'>Minas Gerais, Brasil</p>
        <p className='hour'>{currentTime} (-3 UTC)</p>
    </div>
  )
}

export default Location