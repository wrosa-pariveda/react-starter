import moment from 'moment';

export const EXAMPLE_TYPE = 'EXAMPLE';
export default function exampleActionCreator(text) {
    const now = moment();
    return {
        type: EXAMPLE_TYPE,
        payload: {
            text,
            time: now
        }
    };
}