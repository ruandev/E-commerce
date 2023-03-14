import { createContext } from 'react';
import useSearchValue from '../hooks/Search/useValue';
const SearchContext = createContext<any | "">({});

function SearchProvider(props: any) {
    const useProvider = useSearchValue();

    return (
        <SearchContext.Provider value={useProvider}>
            {props.children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider };