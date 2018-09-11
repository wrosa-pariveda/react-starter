import PropTypes from 'prop-types';

const LocationPropType = PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object
});
const RouterPropTypes = {
    location: LocationPropType,
    history: PropTypes.shape({
        length: PropTypes.number.isRequired,
        action: PropTypes.string.isRequired,
        location: LocationPropType,
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        go: PropTypes.func.isRequired
    }),
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        params: PropTypes.object,
        isExact: PropTypes.bool
    })
};

export default RouterPropTypes;