import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles, Drawer } from '@material-ui/core';
import { toggleSideMenuActionCreator } from '../redux/actions/app_actions';

const el = React.createElement;

/**
 * @typedef {Object} Props
 * Own
 * Mapped
 * @prop {()=>void} open
 * @prop {()=>void} onClose
 * Style
 */

/**
 * @param {Props} props 
 * @returns {React.ReactNode}
 */
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

/**
 * @param {import('../redux/store').ReduxState} state 
 * @param {Props} ownProps 
 * @returns {Partial<Props>}
 */
function mapStateToProps(state, ownProps) {
    return {
        open: state.app.sideMenuOpen
    }
}
/**
 * @typedef {import('../redux/store').ReduxAction} ReduxAction
 * @param {(action:ReduxAction) => void} dispatch 
 * @param {Props} ownProps 
 * @returns {Partial<Props>}
 */
function mapActionsToProps(dispatch, ownProps) {
    return {
        onClose: () => dispatch(toggleSideMenuActionCreator(false))
    }
}

/**
 * @type {{[key:string]:React.CSSProperties}}
 */
const styles = {

};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapActionsToProps)
)(SideMenu);