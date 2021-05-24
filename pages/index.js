import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import NewsEvent from '../components/NewsEvent';
import FooterWithDeco from '../components/Footer/FooterWithDeco';
import PageNav from '../components/PageNav';
import TabPanelView from '../components/TabPanelView';
import TabPanelView2 from '../components/TabPanelView2';
import brand from '../public/text/brand';
import Title from '../components/Title';
import CallAction from '../components/CallAction/CallAction';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.dafault : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2),
    },
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(theme.spacing() / 2),
    },
  },
  spaceMiddle: {
    display: 'flex',
    justifyContent: 'center',
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(2),
    },
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2),
    },
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative',
    },
  },
}));

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const { t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.mobile.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <Banner />
          </section>
          <Title align="center">
            {('common:mobile-landing.feature_title')}
          </Title>
          <section id="tabPanel" className={classes.spaceMiddle}>
            <TabPanelView />
          </section>
          <section id="tabPanel2" className={classes.spaceMiddle}>
            <TabPanelView2 />
          </section>
          <section id="showcase">
            <Showcase />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="callAction">
            <CallAction />
          </section>
          <section id="news" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
        </main>
        <FooterWithDeco toggleDir={onToggleDir} />
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <script src="/scripts/particles-spray.js" />
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mobile-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
