"use client"

import { useState, useEffect } from "react"
import { CardModal } from "../modals/card-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <CardModal />
        </>
    )
}