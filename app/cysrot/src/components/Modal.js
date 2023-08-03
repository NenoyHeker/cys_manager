import React, {Component} from "react";
import Portal from "./Portal";

export default class Modal extends Component{
    render() {
        const {children, toggle, active} = this.props;
        return(
            <Portal>
                {active && (
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                            <button onClick={toggle}>Ok</button>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                )}

            </Portal>
        )
    }
    
}