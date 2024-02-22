'use client'

import React, { Dispatch, SetStateAction } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';

interface Props { 
    setAuthorized: (id: string) => void
}

export const QrScaner = ({ setAuthorized }: Props) => {
    return (
        <QrScanner
            onDecode={(result) => setAuthorized(result)}
            onError={(error) => console.log(error?.message)}
        />
    )
}
