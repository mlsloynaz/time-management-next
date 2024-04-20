"use client"

// useRouter from next/Navigation 

import { ReactNode, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/navigation';

type ModalPros = {
    title: string;
    message?: string;
    description?: string;
    children: ReactNode;
    onClose?: () => void;
    isInterceptingRoute?: boolean;
}

export default function TMModal({ title, description = '', message = '', children = null, isInterceptingRoute = false }: ModalPros) {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(isInterceptingRoute)

    const closeModal = () => {
        setIsOpen(false)
        if (isInterceptingRoute) {
            router.back();
        }
    };

    return (
            <Dialog open={true} onClose={closeModal} className="relative z-50">
                <div className={`fixed inset-0 bg-indigo-200/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className={`fixed inset-0 flex w-screen items-center justify-center p-4 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.Description>
                            {description}
                        </Dialog.Description>
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
    )
}