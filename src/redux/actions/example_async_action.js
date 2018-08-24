import exampleActionCreator from './example_action';

export const EXAMPLE_ASYNC_TYPE = 'EXAMPLE_ASYNC';
export default function exampleAsyncActionCreator(text) {
    return (dispatch, getState) => {
        return fetch('')
            .then(response => response.json())
            .then(data => {
                const currentText = getState().example.text;
                dispatch(exampleActionCreator(`${currentText} ${data}`));
            })
    };
}