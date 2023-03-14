import { useState } from 'react';
export default function useValue() {
    const [title, setTitle] = useState("")

    return {
        title, setTitle
    };
}