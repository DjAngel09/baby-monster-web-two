
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { ListStudents, NewPerson, WebcamCapture } from '../..'

interface Props {
    person: NewPerson;
    setPerson: Dispatch<SetStateAction<NewPerson>>
    handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
    childrens?: Array<NewPerson>
    setChildrens?: Dispatch<SetStateAction<Array<NewPerson>>>
}


export const FormComponent = ({ person, setPerson, handleSubmit, childrens, setChildrens }: Props) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    }

    const handleInputChangeAdress = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson({ ...person, adress: { ...person.adress, [name]: value } });
    }

    const handleInputChangeContact = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson({ ...person, contactData: {...person.contactData, [name]: value} });
    }

    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[950px]">
                <form onSubmit={handleSubmit} >

                    {/* Datos personales */}
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full p-3 m-3 flex justify-center items-center gap-2 rounded-md border border-[#e0e0e0]">
                            {person.photo &&
                                <Image
                                    className='rounded-lg'
                                    src={person.photo}
                                    width={200}
                                    height={200}
                                    alt='imagen'
                                />
                            }
                            <WebcamCapture setImage={setPerson} person={person} />
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Nombre(s)*
                                </label>
                                <input
                                    value={person.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre(s)"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="lastname"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Apellido Paterno*
                                </label>
                                <input
                                    value={person.lastname}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Apellido Paterno"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="secondLastname"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Apellido Materno*
                                </label>
                                <input
                                    value={person.secondLastname}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="secondLastname"
                                    id="secondLastname"
                                    placeholder="Apellido Materno"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="birthdate"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    value={person.birthdate}
                                    onChange={handleInputChange}
                                    type="date"
                                    name="birthdate"
                                    id="birthdate"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className='py-4 border-t-2 border-blue-600' />

                    {/* Datos de contacto */}
                    {
                        person.contactData &&
                        <>
                            <h5>Datos de contacto: </h5>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Correo*
                                        </label>
                                        <input
                                            value={person.contactData.email}
                                            onChange={handleInputChangeContact}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Correo Electronico"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="number"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Telefono*
                                        </label>
                                        <input
                                            value={person.contactData.phone}
                                            onChange={handleInputChangeContact}
                                            type="string"
                                            name="phone"
                                            id="phone"
                                            placeholder="Telefono:"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="password"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Contraseña*
                                        </label>
                                        <input
                                            value={person.contactData.password}
                                            onChange={handleInputChangeContact}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Contraseña:"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="passwordVerify"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Repetir Contraseña*
                                        </label>
                                        <input
                                            value={person.contactData.passwordVerify}
                                            onChange={handleInputChangeContact}
                                            type="password"
                                            name="passwordVerify"
                                            id="passwordVerify"
                                            placeholder="Repetir Contraseña:"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className='py-4 border-t-2 border-blue-600' />
                        </>
                    }

                    {/* Datos de la direccion */}
                    <h5>Direccion: </h5>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="cp"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Codigo Postal*
                                </label>
                                <input
                                    value={person.adress.cp}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="cp"
                                    id="cp"
                                    placeholder="Codigo Postal"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="state"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Estado*
                                </label>
                                <input
                                    value={person.adress.state}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="Estado"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="municipality"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Municipio*
                                </label>
                                <input
                                    value={person.adress.municipality}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="municipality"
                                    id="municipality"
                                    placeholder="Municipio"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="colony"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Colonia*
                                </label>
                                <input
                                    value={person.adress.colony}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="colony"
                                    id="colony"
                                    placeholder="Colonia"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="street"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Calle*
                                </label>
                                <input
                                    value={person.adress.street}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="street"
                                    id="street"
                                    placeholder="Calle"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="outNumber"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Numero Exterior*
                                </label>
                                <input
                                    value={person.adress.outNumber}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="outNumber"
                                    id="outNumber"
                                    placeholder="Numero Exterior"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="inNumber"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Numero Interior
                                </label>
                                <input
                                    value={person.adress.inNumber}
                                    onChange={handleInputChangeAdress}
                                    type="text"
                                    name="inNumber"
                                    id="inNumber"
                                    placeholder="Numero Interior"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className='py-4 border-t-2 border-blue-600' />
                    <ListStudents person={person} childrens={childrens!} setChildrens={setChildrens!} />
                    <div>
                        <button
                            className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
