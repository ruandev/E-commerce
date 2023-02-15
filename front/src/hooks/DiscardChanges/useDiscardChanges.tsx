import { useContext } from 'react';
import { DiscardChangesContext } from '../../context/DiscardChanges';

export default function useDiscardChanges() {
    return useContext(DiscardChangesContext);
}