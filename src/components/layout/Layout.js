/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';


import theme from '../../util/theme';

import Header from './Header';
import SideBar from './Sidebar';
import Footer from './Footer';


import '../../styles/index.scss';

const Layout = ({ children }) => {

  // Sidebar Drawer
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  // FORM POPUP DIALOG
  const [openFormDialog, setOpenFormDialog] = React.useState(false);
  const handleOpenFormDialog = () => {
    setOpenFormDialog(true);
  };
  const handleCloseFormDialog = () => {
    setOpenFormDialog(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Header
          toggleDrawer={toggleDrawer}
          handleClickOpen={handleOpenFormDialog}
          // prop drilling -- useReducer
        />
        <SideBar
          leftDrawer={state.left} toggleDrawer={toggleDrawer} />
        <main>{children}</main>
        <Footer
          openFormDialog={openFormDialog} handleCloseFormDialog={handleCloseFormDialog}
        />
      </>
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
