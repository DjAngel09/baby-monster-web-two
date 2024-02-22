'use client'

import { NewPerson, newStuden } from '@/resources';
import { FormComponent } from '@/resources/components/commons/FormComponent';
import { ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export const initialStudent: NewPerson = {
    uuid: '',
    name: '',
    photo: '',
    lastname: '',
    secondLastname: '',
    birthdate: new Date().toDateString(),
    adress: {
        colony: '',
        cp: '',
        inNumber: '',
        municipality: '',
        outNumber: '',
        state: '',
        street: ''
    }
}

export const NewStudent = () => {

    const [studen, setStudent] = useState(initialStudent);

    const saveStudent = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await newStuden(studen, 'students');            
            MySwal.fire({
                title: "Excelente",
                text: "Alumno dado de alta en sistema",
                icon: "success"
            })
        } catch (error) {
            console.log(error);
            MySwal.fire({
                title: "Algo paso",
                text: "No pudimos dar de alta al Alumno, intentelo mas tarde",
                icon: "error"
            })
        }

    }



    return (
        <>
            <FormComponent
                person={studen}
                setPerson={setStudent}
                handleSubmit={saveStudent}
            />
        </>
    )
}
