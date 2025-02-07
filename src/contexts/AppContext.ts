import { createContext } from 'react';

export interface IAppContext {
  isMobile: null | boolean;
}
export const AppContext = createContext<IAppContext>({
  isMobile: null,
});
