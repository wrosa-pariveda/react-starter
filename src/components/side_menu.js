import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles, Drawer, List, ListItem, ListItemText, ListItemIcon, Icon } from '@material-ui/core';
import { Routes, RouterPropTypes } from '../routes';
import { AppReducerStatePropType } from '../redux/reducers/app_reducer';
import { toggleSideMenuActionCreator } from '../redux/actions/app_actions';

const el = React.createElement;

const SideMenu = (props) => {
    function handleClick(route) {
        props.history.push(route);
        props.close();
    }

    const { app, close, classes } = props;
    const open = app.sideMenuOpen;
    return el(Drawer, { open, onClose: close },
        el('div', { className: classes.menuList },
            el(List, null,
                el(ListItem, { onClick: () => handleClick(Routes.home.path), button: true },
                    el(ListItemIcon, null, el(Icon, null, 'home')),
                    el(ListItemText, { primary: 'Home Page' })
                ),
                el(ListItem, { onClick: () => handleClick(Routes.lazyLoad.path), button: true },
                    el(ListItemIcon, null, el(Icon, null, 'cloud_download')),
                    el(ListItemText, { primary: 'Lazy Load Example Page' })
                ),
                el(ListItem, { onClick: () => handleClick(Routes.async.path), button: true },
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
    app: AppReducerStatePropType,
    close: PropTypes.func.isRequired,

    // Router
    history: RouterPropTypes.history,

    // Styles
    classes: PropTypes.object.isRequired
};

/**
 * @type {{[key:string]:React.CSSProperties}}
 */
const styles = {
    menuList: {
        minWidth: 250
    }
};

function mapStateToProps(state) {
    return {
        app: state.app
    }
}
function mapActionsToProps(dispatch) {
    return {
        close: () => dispatch(toggleSideMenuActionCreator(false))
    }
}

export default compose(
    withRouter,
    withStyles(styles),
    connect(mapStateToProps, mapActionsToProps)
)(SideMenu);