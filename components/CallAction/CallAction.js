import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <div style={{ marginBottom: 100 }}>
      <Container fixed={isDesktop}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={8} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('common:mobile-landing.cta_title')}
                </Typography>
                <Typography display="block" component="div">
                  {t('common:mobile-landing.cta_subtitle')}
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Grid container alignItems="center">
                  <Link href="/contact">
                    <Button size="large" variant="outlined" color="secondary" className={classes.button}>
                      {t('common:mobile-landing.cta_btn')}
                      <SendIcon className={classes.rightIcon} />
                    </Button>
                  </Link>


                  <Link href="/contact">
                    <Button>
                      {t('common:mobile-landing.header_contact')}
                    </Button>
                  </Link>

                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['mobile-landing'])(CallAction);
