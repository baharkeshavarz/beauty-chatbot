import { Card, Grid, Stack, Typography, Divider, Box } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'jalali-moment';
import UserType from 'src/pages/users/Admin/components/UserType';
import { IRequestComment } from 'src/services/comment/type';
import useAdminRequestTypesOptions from 'src/hooks/useAdminRequestTypes';

interface RequestCommentCardProps {
  comment: IRequestComment;
}

const RequestCommentCard: FC<RequestCommentCardProps> = ({ comment }) => {
  const { t } = useTranslation();

  const requestTypes = useAdminRequestTypesOptions();
  const currentStatus = requestTypes.find(
    item => item.id === comment.request_status,
  );

  return (
    <>
      <Grid item xs={12}>
        <Card
          variant="outlined"
          sx={{
            display: 'flex',
            p: 1,
            m: 1,
          }}
        >
          <Stack width="100%">
            <Grid container display="flex" justifyContent="space-between">
              <Grid item display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">
                  {t('common:columns.create_date')}
                </Typography>
                <Typography variant="subtitle1">
                  {moment(comment.create_date)
                    .locale('fa')
                    .format('YYYY/MM/DD HH:mm')}
                </Typography>
              </Grid>

              <Grid item display="flex" alignItems="center" gap={1}>
                <Typography variant="h6">
                  {t('pages:requests.requestStatus')}
                </Typography>
                <Typography variant={'subtitle1'}>
                  {currentStatus?.label}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
            <Grid item xs={12} md={12} spacing={2}>
              <Box display="flex" p={1} alignItems="center">
                <Typography variant="body1">
                  {t('pages:requests.columns.user_info')}:
                </Typography>
                <Typography variant="body1">
                  <UserType value={[comment.user_types]} />
                </Typography>
              </Box>
              <Box display="flex" p={1}>
                <Typography variant="body1">
                  {t('common:columns.description')}:
                </Typography>
                <Typography variant="body1">{comment.text}</Typography>
              </Box>
            </Grid>
          </Stack>
        </Card>
      </Grid>
    </>
  );
};

export default RequestCommentCard;
