import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import BasePage from '../components/base_page';
import { fetchCommentActionCreator } from '../redux/actions/comments_actions';

const el = React.createElement;
class AsyncPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    handleClick() {
        this.setState({ loading: true }, () => {
            this.props.fetchNextComment().finally(() => {
                this.setState({ loading: false });
            });
        });
    }

    render() {
        return el('div', null,
            el(BasePage, { title: 'Async Page Example' },
                el(Grid, { container: true },
                    el(Grid, { item: true, xs: 3 }),
                    el(Grid, { item: true, xs: 6 },
                        el('p', null, 'This page uses the jsonplaceholder api to generate fake async content, with is then stored in Redux through Thunk middleware'),
                        el(Button, { onClick: () => this.handleClick(), variant: 'raised', color: 'primary' }, 'Load More Comments'),
                        el(List, null,
                            this.props.commentList.map(comment => {
                                return el(ListItem, { key: `${comment.id}-${comment.postId}` },
                                    el(ListItemText, { primary: comment.email, secondary: comment.name })
                                )
                            })
                        )
                    ),
                    el(Grid, { item: true, xs: 3 }),
                )
            ),
        );
    }
}

/**
 * @param {import('../redux/store').ReduxState} state
 */
function mapStateToProps(state) {
    return {
        commentList: state.comments.list
    }
}
/**
 * @typedef {import('../redux/store').ReduxAction} ReduxAction
 * @param {(action:ReduxAction) => void} dispatch
 */
function mapActionsToProps(dispatch) {
    return {
        fetchNextComment: () => dispatch(fetchCommentActionCreator())
    }
}

AsyncPage.propTypes = {
    // Own

    // Mapped
    commentList: PropTypes.arrayOf(PropTypes.shape({
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string
    })),

    // Router
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,

    // Styles
};

export default connect(mapStateToProps, mapActionsToProps)(AsyncPage);