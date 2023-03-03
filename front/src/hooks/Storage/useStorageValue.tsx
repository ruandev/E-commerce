import { useLocalStorage } from 'react-use';
export default function useStorageValue() {
    const [storage, setStorage, remove] = useLocalStorage("storage", "");
    return {
        storage, setStorage, remove
    };
}