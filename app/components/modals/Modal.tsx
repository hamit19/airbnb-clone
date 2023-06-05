"use client";
import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button";

interface ModalProps {
  isOpen?: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-700/70'>
        <div className='relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto'>
          {/* CONTENT */}
          <div
            className={`
            translate duration-300 h-full
             ${showModal ? "translate-y-0" : "translate-y-full"} 
             ${showModal ? "opacity-100" : "opacity-0"} 
            `}
          >
            <div className='relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate lg:h-auto md:h-auto focus:outline-none'>
              {/* HEADER */}
              <div className='relative flex items-center justify-center p-6 border-b rounded-t'>
                <button
                  onClick={handleClose}
                  className='absolute p-1 transition border-0 left-9 hover:opacity-70'
                >
                  <IoMdClose />
                </button>
                <div className='text-lg font-semibold'>
                  <span>{title}</span>
                </div>
              </div>
              {/* BODY */}
              <div className='relative flex-auto p-6 '>{body}</div>
              {/* FOOTER */}
              <div className='flex flex-col gap-4 p-6'>
                <div className='flex flex-row items-center w-full gap-4'>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      label={secondaryActionLabel}
                      onClick={secondaryAction}
                      disable={disabled}
                      outline
                    />
                  )}
                  <Button
                    disable={disabled}
                    label={actionLabel || ""}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
