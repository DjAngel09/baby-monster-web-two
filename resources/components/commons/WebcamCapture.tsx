'use client'

import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { ModalComponent } from "..";
import { NewPerson } from "../..";

interface Props {
  setImage: Dispatch<SetStateAction<NewPerson>>
  person: NewPerson;
}

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user"
};

export const WebcamCapture = ({ setImage, person }: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);

  }

  const capture = useCallback(
    () => {
      const imageSrc: string = webcamRef.current?.getScreenshot() as string;
      setImage({...person, photo: imageSrc});
      setOpen(false);

    },
    [webcamRef, person]
  );

  return (
    <>
      <button 
        type='button' 
        onClick={openModal} 
        className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
      >
        Tomar Foto
      </button>
      <ModalComponent open={open} >
        <div>
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            videoConstraints={videoConstraints}
          />
          <button
            type="button"
            onClick={capture}
            className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Capture photo
          </button>
        </div>
      </ModalComponent>
    </>
  );

};