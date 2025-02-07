import { useContext } from 'react';
import { localFormContext } from 'src/components/Fields/providers/LocalFormProvider';

const useLocalFormContext = () => useContext(localFormContext);
export default useLocalFormContext;
