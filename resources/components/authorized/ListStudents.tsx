'use client'
import { NewPerson, getStudents, initialStudent } from '@/resources';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../commons/Button';

interface Props {
    person: NewPerson;
    childrens: Array<NewPerson>
    setChildrens: Dispatch<SetStateAction<Array<NewPerson>>>
}

export const ListStudents = ({ person, childrens, setChildrens }: Props) => {

    const [students, setStudents] = useState([initialStudent]);

    const getStudentsClient = async () => {
        try {
            const prestudents = await getStudents();
            setStudents(prestudents);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getStudentsClient();
    }, []);

    const addChildren = (children: NewPerson) => {
        const preChildren = [...childrens, children];
        setChildrens(preChildren);
    }

    const deleteChildren = (children: NewPerson) => {
        const preChildren = childrens.filter(child => child.uuid != children.uuid);
        setChildrens(preChildren)
    }

    return (
        <>
            {
                person.childrens &&
                <>
                    <h2>Agregar a los alumnos autorizados: </h2>
                    <div className='p-4 -mx-3 flex flex-wrap' >
                        <div className='border w-full sm:w-1/2 rounded border-[#e0e0e0] max-h-80 overflow-auto' >
                            {
                                students.map((student) => (
                                    <div key={student.uuid} className='flex flex-wrap p-4 pb-0 justify-between items-center'>
                                        <Image src={student.photo} width={60} height={60} alt={student.name}/>
                                        <p  className='border-b-black p-4' >
                                            {student.name}
                                        </p>
                                        <Button onClick={() => addChildren(student)} >Agregar</Button>
                                        <hr className='w-full block mt-4' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='border w-full sm:w-1/2 rounded border-[#e0e0e0] max-h-80 overflow-auto' >
                            {
                                childrens.map( children => (
                                    <div key={children.uuid} className='flex flex-wrap p-4 pb-0 justify-between items-center'>
                                        <Image src={children.photo} width={60} height={60} alt={children.name}/>
                                        <p  className='border-b-black p-4' >
                                            {children.name}
                                        </p>
                                        <Button onClick={() => deleteChildren(children)} >Eliminar</Button>
                                        <hr className='w-full block mt-4' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}
