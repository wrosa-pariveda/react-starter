import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles, AppBar, Toolbar, IconButton, Icon, Typography } from '@material-ui/core';
import { toggleSideMenuActionCreator } from '../redux/actions/app_actions';

const el = React.createElement;

/**
 * @typedef {Object} Props
 * Own
 * @prop {string} title
 * Mapped
 * @prop {()=>void} openMenu
 * Styles
 * @prop {{[key:string]:React.CSSProperties}} classes
 */

/**
 * @param {Props} props 
 * @returns {React.ReactNode}
 */

const BasePage = (props) => {
    return el('div', null,
        el(AppBar, null,
            el(Toolbar, null,
                el(IconButton, { className: props.classes.menuButton, onClick: props.openMenu },
                    el(Icon, null, 'menu')
                ),
                el(Typography, { variant: 'title', }, props.title)
            )
        ),
        el('div', { className: props.classes.content }, props.children)
    );
};

BasePage.propTypes = {
    // Own
    title: PropTypes.string.isRequired,

    // Mapped
    openMenu: PropTypes.func.isRequired,

    // Styles
    classes: PropTypes.object.isRequired,
};

/**
 * @type {{[key:string]:React.CSSProperties}}
 */
const styles = {
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    content: {
        marginTop: 80
    }
};

/**
 * @typedef {import('../redux/store').ReduxAction} ReduxAction
 * @param {(action:ReduxAction) => void} dispatch 
 * @param {Props} ownProps 
 * @returns {Partial<Props>}
 */
function mapActionsToProps(dispatch, ownProps) {
    return {
        openMenu: () => dispatch(toggleSideMenuActionCreator(true))
    }
}

export default compose(
    withStyles(styles),
    connect(null, mapActionsToProps)
)(BasePage);