import { useState } from 'react';
export default function useValue() {
    const [modalDiscardChanges, setModalDiscardChanges] = useState(false)

    return {
        modalDiscardChanges, setModalDiscardChanges
    };
}