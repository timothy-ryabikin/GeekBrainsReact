import { useCallback, useState } from "react";

import { toggleShowName } from "../profile/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
    // const { showName, name } = store.getState().profile;
    const { showName, name } = useSelector((state) => state.profile);
    // const dispatch = store.dispatch;
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName());
    }, [dispatch]);

    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>

    );
}