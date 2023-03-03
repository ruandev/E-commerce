import { createContext } from 'react';
import useStorageValue from '../hooks/Storage/useStorageValue';
const StorageContext = createContext<any | {}>({});

function StorageProvider(props: any) {
    const useProvider = useStorageValue();

    return (
        <StorageContext.Provider value={useProvider}>
            {props.children}
        </StorageContext.Provider>
    );
}

export { StorageContext, StorageProvider };