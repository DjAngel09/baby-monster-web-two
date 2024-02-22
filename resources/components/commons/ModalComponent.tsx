'use client'
import React, { FC, ReactElement } from "react";

interface ModalInterface {
    children: ReactElement;
    open: boolean;
}

export const ModalComponent:FC<ModalInterface> = ({ children, open = false }) => {
    
    return (
        <>
            {open ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-xl">
                            {/*content*/}
                            <div className="border border-black rounded-lg shadow-lg relative flex flex-col w-full bg-[#f3f3f3e3] outline-none focus:outline-none px-11 pt-14 pb-7 dark:bg-[#262B3C] dark:border-[#939B9F]">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}