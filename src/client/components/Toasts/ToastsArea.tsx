import { FunctionComponent } from "react"

const ToastsArea: FunctionComponent = (props) => {
    return (<div className="ToastsArea">
        <style>{`
            .ToastsArea {
                position: fixed;
                right: 12px;
                bottom: 12px;
            }
        `}</style>
        {props.children}
        </div>);
};

export default ToastsArea;
