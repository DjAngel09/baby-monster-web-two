'use client'
import {onAuthStateChanged,getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config';
import { ReactNode, createServerContext, useContext, useEffect, useState } from 'react';

const auth = getAuth(firebase_app);

export const AuthContext = createServerContext('auth',{});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
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