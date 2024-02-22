'use client'

import React, { useEffect, useState } from 'react'
import { QrScaner } from '..'
import { Button } from '../components/commons/Button'

export const CheckTemplate = () => {

    const [typeCheck, setTypeCheck] = useState(0);
    const [authorized, setAuthorized] = useState('');

    const searchAuthorized = (id: string) => {
        setAuthorized(id);
        console.log('este es el resultado', authorized);
        

    }


    return (
        <div>
            <div className='flex gap-2 justify-center items-center pb-4' >
                <Button onClick={() => setTypeCheck(0)} >Entrada</Button>
                <Button onClick={() => setTypeCheck(1)} > Salida </Button>
            </div>
            <p> Registro de {typeCheck === 0 ? 'Entrada' : 'Salida'}: </p>
            {authorized === '' ?
                <div className='max-w-96 m-auto' >
                    <QrScaner setAuthorized={searchAuthorized} />
                </div>
                :
                <div>
                    Ya se escaneo
                </div>
            }

        </div>
    )
}
