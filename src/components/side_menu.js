import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles, Drawer } from '@material-ui/core';
import { toggleSideMenuActionCreator } from '../redux/actions/app_actions';

const el = React.createElement;

const SideMenu = (props) => {
    const { open, onClose } = props;
    return el(Drawer, { open, onClose },
        el('p', null, 'hi')
    )
};

SideMenu.propTypes = {
    // Own

    // Mapped
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,

    // Styles
};

function mapStateToProps(state, ownProps) {
    return {
        open: state.app.sideMenuOpen
    }
}
function mapActionsToProps(dispatch, ownProps) {
    return {
        onClose: () => dispatch(toggleSideMenuActionCreator(false))
    }
}

const styles = {

};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapActionsToProps)
)(SideMenu);