import React from 'react'
import { messageConsoleActions } from '../_actions';
import { connect } from 'react-redux';

class MessageConsole extends React.Component {

    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        const { messages, loaded } = this.props;

        return(
            loaded ? JSON.stringify(messages, null, 2) : "Loading..."
        )
    }
}

function mapStateToProps(state) {
    const { loaded, messages } = state.messageConsole;
    return {
        messages,
        loaded
    };
}

const mapDispatchToProps = (dispatch) => ({
    getMessages: () => {
        dispatch(messageConsoleActions.getMessages())
    }
})

const connectedMessageConsole = connect(mapStateToProps, mapDispatchToProps)(MessageConsole);
export { connectedMessageConsole as MessageConsole };