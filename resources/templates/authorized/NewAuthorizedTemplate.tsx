'use client'

import { Childrens, NewPerson, newAuthorized } from '@/resources';
import { FormComponent } from '@/resources/components/commons/FormComponent';
import { ChangeEvent, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export const initialAuthorized: NewPerson = {
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
  },
  typePerson: 'authorized',
  childrens: [],
  contactData: {
    email: '',
    phone: '',
    password: '',
    passwordVerify: ''
  }
}

const temChil:Array<NewPerson> = []

export const NewAuthorized = () => {
  const [authorized, setAuthorized] = useState(initialAuthorized);
  const [ childrens, setChildrens ] = useState(temChil);

  const saveAuthorized = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let prechild: Array<Childrens> = []

    try {
      childrens.forEach(children => {
        prechild.push({idChildren: children.uuid});
      });
      const user = await newAuthorized({...authorized, childrens: prechild});
      console.log(user);
      MySwal.fire({
        title: "Excelente",
        text: "Padre o familiar dado de alta en sistema",
        icon: "success"
      })
    } catch (error) {
      console.log(error);
      MySwal.fire({
        title: "Algo paso",
        text: "No pudimos dar de alta al Padre o familiar, intentelo mas tarde",
        icon: "error"
      })
    }

  }



  return (
    <>
      <h1>Nuevo autorizado: </h1>
      <FormComponent
        person={authorized}
        setPerson={setAuthorized}
        handleSubmit={saveAuthorized}
        childrens={childrens}
        setChildrens={setChildrens}
      />
    </>
  )
}
