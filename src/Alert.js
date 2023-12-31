import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '30px' }}>
            {props.alert && <div>
                <div className={`my-1 py-1 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong>: {props.alert.message}
                </div>
            </div>}
        </div>
    )
}

export default Alert