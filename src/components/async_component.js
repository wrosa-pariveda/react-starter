import React from "react";

const el = React.createElement;

const asyncComponent = (getComponent) => {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = { Component: null };
        }

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    this.setState({ Component });
                });
            }
        }

        render() {
            const { Component } = this.state
            if (Component) {
                return el(Component, this.props);
            }
            return null
        }
    }
}

export default asyncComponent;