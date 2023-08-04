import React, {Component} from 'react';
import Portal from './Portal';


export default class Modal extends Component { 
    render(){
        const { children, toggle, active } = this.props;
        //Remplazar los style por classname y ver si se les pueden asignar estilos desde una hoja CSS
        return(
            <Portal>
                
                {active && (
                    <div style={styles.wrapper}>
                        <div style={styles.window}>
                            <button style={Styles.closeBtn} onClick={toggle}>X</button>
                        </div>

                    </div>
                )}



            </Portal>
        )
    }
    
}