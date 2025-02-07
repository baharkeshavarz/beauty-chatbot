import { useContext } from 'react';
import { AppContext } from 'src/contexts/AppContext';

export const useAppContext = () => useContext(AppContext);
