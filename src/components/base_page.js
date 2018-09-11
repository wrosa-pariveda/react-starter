import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles, AppBar, Toolbar, IconButton, Icon, Typography } from '@material-ui/core';
import { toggleSideMenuActionCreator } from '../redux/actions/app_actions';

const el = React.createElement;

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

function mapActionsToProps(dispatch) {
    return {
        openMenu: () => dispatch(toggleSideMenuActionCreator(true))
    }
}

export default compose(
    withStyles(styles),
    connect(undefined, mapActionsToProps)
)(BasePage);