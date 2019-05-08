import React, { Component } from 'react';

const HOCFile1 = (Comp,hits) => {
    class NewComp extends Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = ({
                count: 0
            })
        }

        handleClick() {
            let { count } = this.state;
            count = count + hits;
            this.setState({
                count
            })
        }
        render() {
            return (
                <div style={{ border: "5px pink solid" }}>
                    <Comp
                        hoccount={this.state.count}
                        hochandleClick={this.handleClick}
                        {...this.props}
                    />

                </div >

            )
        }
    }
    return NewComp;
}

export default HOCFile1