import { messageConsoleConstants } from '../_constants';
import { messageConsoleService } from '../_services';

export const messageConsoleActions = {
    getMessages
};

function getMessages() {
    return dispatch => {
        dispatch(request());

        messageConsoleService.getMessages()
            .then(
                messageConsole => { 
                    dispatch(success(messageConsole));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: messageConsoleConstants.GET_MESSAGES_REQUEST } }
    function success(messages) { return { type: messageConsoleConstants.GET_MESSAGES_SUCCESS, messages } }
    function failure(error) { return { type: messageConsoleConstants.GET_MESSAGES_FAILURE, error } }
}