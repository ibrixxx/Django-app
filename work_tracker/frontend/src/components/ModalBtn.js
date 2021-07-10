import React from "react";
import {Button} from "react-bootstrap";
import MyModal from "./MyModal";

export default function ModalBtn({text, admin, user, username, renderRecords, setUsers, users}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={"mb-3"}>
            <Button variant="info" className={"text-light"} onClick={() => setModalShow(true)}>
                {text}
            </Button>

            <MyModal
                admin={admin}
                user={user}
                show={modalShow}
                username={username}
                renderRecords={() => {renderRecords();}}
                setUsers={setUsers}
                users={users}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}