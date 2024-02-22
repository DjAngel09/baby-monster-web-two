//Esto de qui queda completamente deprecado pero se queda como concepto informativo;


'use client'
import {onAuthStateChanged,getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

const auth = getAuth(firebase_app);

let initialUser:any;

export const AuthContext = React.createContext(initialUser);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(initialUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};