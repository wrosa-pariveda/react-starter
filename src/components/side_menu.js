import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles, Drawer, List, ListItem, ListItemText, ListItemIcon, Icon } from '@material-ui/core';
import routes from '../routes/routes';
import { toggleSideMenuActionCreator } from '../redux/actions/app_actions';

const el = React.createElement;

/**
 * @typedef {Object} Props
 * Own
 * Mapped
 * @prop {()=>void} open
 * @prop {()=>void} close
 * Router
 * @prop {*} history
 * Styles
 * @prop {{[key:string]:React.CSSProperties}} classes
 */

/**
 * @param {Props} props 
 * @returns {React.ReactNode}
 */
const SideMenu = (props) => {
    function handleClick(route) {
        props.history.push(route);
        props.close();
    }

    const { open, close, classes } = props;
    return el(Drawer, { open, onClose: close},
        el('div', { className: classes.menuList },
            el(List, null,
                el(ListItem, { onClick: () => handleClick(routes.home.path), button: true },
                    el(ListItemIcon, null, el(Icon, null, 'home')),
                    el(ListItemText, { primary: 'Home Page' })
                ),
                el(ListItem, { onClick: () => handleClick(routes.sideLoad.path), button: true },
                    el(ListItemIcon, null, el(Icon, null, 'cloud_download')),
                    el(ListItemText, { primary: 'Side Load Example Page' })
                ),
                el(ListItem, { onClick: () => handleClick(routes.async.path), button: true },
                    el(ListItemIcon, null, el(Icon, null, 'comment')),
                    el(ListItemText, { primary: 'Async Example Page' })
                )
            )
        )
    )
};

SideMenu.propTypes = {
    // Own

    // Mapped
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,

    // Router
    history: PropTypes.object.isRequired,

    // Styles
    classes: PropTypes.object.isRequired
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
        close: () => dispatch(toggleSideMenuActionCreator(false))
    }
}

/**
 * @type {{[key:string]:React.CSSProperties}}
 */
const styles = {
    menuList: {
        minWidth: 250
    }
};

export default compose(
    withRouter,
    withStyles(styles),
    connect(mapStateToProps, mapActionsToProps)
)(SideMenu);