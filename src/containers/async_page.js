import React from 'react';
import { Grid, Button, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { RouterPropTypes } from '../routes';
import BasePage from '../components/base_page';
import { CommentsReducerStatePropType } from '../redux/reducers/comments_reducer';
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
                        el('div', { hidden: !this.state.loading },
                            el(CircularProgress)
                        ),
                        el(List, null,
                            this.props.comments.list.map(comment => {
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

AsyncPage.propTypes = {
    // Own

    // Mapped
    comments: CommentsReducerStatePropType,

    // Router
    history: RouterPropTypes.history,
    location: RouterPropTypes.location,
    match: RouterPropTypes.match,

    // Styles
};

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}
function mapActionsToProps(dispatch) {
    return {
        fetchNextComment: () => dispatch(fetchCommentActionCreator())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(AsyncPage);