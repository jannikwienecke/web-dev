import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaRegWindowClose } from "react-icons/fa";
import React from "react";
import { ModelType } from "../DetailView/DetailView";

export interface SlideOverProps {
  onClose?: () => void;
  model?: ModelType;
  children: (model: ModelType) => React.ReactNode;
}

export function SlideOver({ children, onClose, model }: SlideOverProps) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(Boolean(model));
  }, [model]);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xl">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="text-skin-base-inverted hover:text-skin-base-dark rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <FaRegWindowClose
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="bg-skin-base-light flex h-full flex-col overflow-y-scroll  shadow-xl">
                    <div className="bg-skin-accent py-6">
                      <div className="text-skin-base-inverted px-4 sm:px-6">
                        <Dialog.Title className="text-lg font-medium font-extrabold ">
                          Model: {model?.model}
                        </Dialog.Title>

                        <div className="mt-1">
                          <p className="text-skin-base-inverted text-sm">
                            {model?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {model && children(model)}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
