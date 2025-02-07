import { GridApi } from 'ag-grid-community';
import { useRef } from 'react';
import GridContext from './context/GridContext';

export interface GridProviderProps {
  children?: React.ReactNode;
}
const GridProvider = ({ children }) => {
  const gridRef = useRef<GridApi>(null);

  return (
    <GridContext.Provider
      value={{
        gridRef,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export default GridProvider;
