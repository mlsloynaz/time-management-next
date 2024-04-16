"use client"

import { ReactElement } from "react";


interface TmButtonProps extends React.HTMLProps<HTMLButtonElement> {
    label?: string;
    children?: ReactElement;
    className?: string;
    secondary?: boolean;

    dataTest?: string;
}

export function TmButton(props: TmButtonProps) {
    const classButtonType = props.secondary ? 'bg-white' : '';
    const classDisabled = props.disabled ? 'disabled' : '';

    function handleClick(event: never) {
        if (!props.disabled && props.onClick) {
            props.onClick(event);
        }
    }

    const classButton = "text-black bg-[#E4E6F9] e border border-gray-300 focus:outline-none hover:bg-slate-200 focus:ring-4 focus:ring-[#464CD4] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
   
    return (
        <div data-test={props.dataTest} className={props.className}>
            <button
                onClick={handleClick}
                type="button"
                className={`${classDisabled} ${classButton} ${classButtonType}`}
                aria-label={props.label}
                disabled={props.disabled}
            >
                {props.label && props.label.length > 0 ? <span className="text-xs md:text-sm">{props.label}</span> : null}
                {props.children}
            </button>
        </div>
    );
}