import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CustomTextField } from './Fields';

const SearchField = ({ onSubmit }) => {
  const { t } = useTranslation();

  const form = useForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomTextField
          label={t('common:buttons.search')}
          name="search_text"
          fullWidth
          size="medium"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <Search />
              </IconButton>
            ),
          }}
        />
      </form>
    </FormProvider>
  );
};

export default SearchField;
