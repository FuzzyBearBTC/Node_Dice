import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import socket from '../utils/socketIoHelper';
import moment from 'moment';

class Chat extends React.Component {
      constructor(props) {
            super(props);
            this.sendMsg = this.sendMsg.bind(this);
      }

      componentDidMount() {
            this.initChat();
            this.receiveChats();
      }
      componentWillUnmount() {
            this.leaveChat();
      }

      leaveChat() {
            //   socket.close();
      }
      receiveChats() {
            socket.on('recvChat', (result) => {

                  this.props.onReceiveMessage({ timeStamp: moment(result.timeStamp).format('MM-DD HH:mm'), message: result.message });

                  // chat.scrollToBottom();
            });
      }
      initChat() {
            const self = this;
            socket.emit('getChats', '');
            socket.on('getChats', function (result) {
                  // console.log(result);
                  if (result.length > 0) {
                        result.sort((a, b) => a.timeStamp > b.timeStamp ? 1 : -1);
                        result.map((r) => self.props.onReceiveMessage({ timeStamp: moment(r.timeStamp).format('MM-DD HH:mm'), message: r.message }));
                  }
                  //chat.scrollToBottom();
            });
      }
      sendMsg(e) {
            e.preventDefault();

            if (this.newMessage.value != '') {
                  this.props.onSendMessage(this.newMessage.value);
                  this.newMessage.value = '';
                  this.newMessage.focus();
            }
      }
      render() {

            const p = this.props;
            const messages = (p && p.messages) || [];

            return (
                  <div className="col-sm-12 action-chat" id="chatBox">
                        <ul className="list-group" id="chatList">
                              {
                                    messages.map((msg, i) =>
                                          <li className="chat-item list-group-item" key={i}>
                                                <span>{msg.timeStamp}</span> <span className="text-danger" />: <br />
                                                <label className="text-info" >{msg.message}</label>
                                          </li>
                                    )}

                        </ul>
                        <hr />
                        <form onSubmit={this.sendMsg}>
                              <div className="form-group">
                                    <label>Message:</label>
                                    <input type="text" ref={(input) => { this.newMessage = input; }} className="form-control rounded" placeholder="Enter message" />
                              </div>

                              <button type="submit" onClick={this.sendMsg} className="btn btn-default">Send</button>
                        </form>
                  </div>);
      }
}
Chat.propTypes = {
      onSendMessage: PropTypes.func,
      onReceiveMessage: PropTypes.func,
      messages: PropTypes.arrayOf(PropTypes.shape({
            message: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired
      }).isRequired),
      userName: PropTypes.string
};

const mapStateToProps = (state) => {
      return {
            messages: state.chat.messages
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            onSendMessage: (text) => dispatch({ type: 'SEND_MESSAGE', message: text }),
            onReceiveMessage: (message) => dispatch({ type: 'RECV_MESSAGE', message: message })
      };

};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);