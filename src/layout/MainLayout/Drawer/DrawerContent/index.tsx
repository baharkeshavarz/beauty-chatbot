import SimpleBar from 'src/components/third-party/SimpleBar';
import Navigation from './Navigation';

const DrawerContent = () => {
  return (
    <SimpleBar
      sx={{
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Navigation />
    </SimpleBar>
  );
};

export default DrawerContent;
