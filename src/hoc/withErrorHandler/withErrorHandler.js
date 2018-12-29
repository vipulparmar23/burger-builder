import React, { Component } from 'react';
import Modal from '../../component/UI/Modal/Modal';

import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })

            axios.interceptors.response.use(null, error => {
                this.setState({ error: error });
            });
        }

        errorComfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorComfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    {/* Passing the WrappedComponent so that the whole UI stays there with
                        just the addition of a Modal with error message. 
                        For Example, WrappedComponent contains the whole BergerBuilder page 
                    */}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}
export default withErrorHandler;