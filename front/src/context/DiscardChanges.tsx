import { createContext } from 'react';
import useDiscardChangesValue from '../hooks/DiscardChanges/useValue';
// import { IStateDiscardChanges } from '../interfaces/DiscardChanges/IStateDiscardChanges.type';
const DiscardChangesContext = createContext<any | {}>({});

function DiscardChangesProvider(props: any) {
    const useProvider = useDiscardChangesValue();

    return (
        <DiscardChangesContext.Provider value={useProvider}>
            {props.children}
        </DiscardChangesContext.Provider>
    );
}

export { DiscardChangesContext, DiscardChangesProvider };