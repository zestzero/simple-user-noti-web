import { FunctionComponent, useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";

interface Props {
    title: string;
    content: string;
}

const Toasts: FunctionComponent<Props> = (props) => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <Row>
            <Col xs={12}>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <strong className="me-auto">{props.title}</strong>
                        <small></small>
                    </Toast.Header>
                    <Toast.Body>{props.content}</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
};

export default Toasts;
