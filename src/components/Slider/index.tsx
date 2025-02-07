import { useState } from 'react';
import Carousel from 'react-carousel-mui';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Dialog, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const CustomCard = ({ url, onClick }) => {
  return (
    <Card onClick={() => onClick(url)}>
      <CardMedia
        component="img"
        image={url}
        sx={{
          width: '90%',
          height: '180px',
          objectFit: 'cover',
          cursor: 'pointer',
        }}
      />
    </Card>
  );
};

const ImageGallerySlider = ({ srcList }) => {
  const theme = useTheme();
  const maxWidth = theme.breakpoints.values.md;

  const [selectedImage, setSelectedImage] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleImageClick = url => {
    setSelectedImage(url);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ p: 3, maxWidth }}>
      <Carousel
        items={srcList}
        itemsPerPage={{
          xs: 1,
          sm: 2,
          tablet: 3,
          md: 3,
          lg: 4,
          xl: 5,
        }}
        itemRenderer={item => (
          <CustomCard url={item} onClick={handleImageClick} />
        )}
        maxContainerWidth={maxWidth}
      />

      {/* Dialog to show large image */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        PaperProps={{
          sx: {
            position: 'relative',
            padding: 0,
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleCloseDialog}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedImage && (
          <img
            src={selectedImage}
            alt="Large view"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default ImageGallerySlider;
