import GridProvider from '../GridProvider';

const GridProviderHoc = WrappedComponent => {
  const WithGridProvider = props => {
    return (
      <GridProvider>
        <WrappedComponent {...props} />
      </GridProvider>
    );
  };

  return WithGridProvider;
};

export default GridProviderHoc;
