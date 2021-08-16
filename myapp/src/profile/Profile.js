import { useCallback, useState } from "react";

import { toggleShowName, changeName } from "../profile/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
    // const { showName, name } = store.getState().profile;
    const { showName, name } = useSelector((state) => state.profile);
    // const dispatch = store.dispatch;
    const dispatch = useDispatch();

    const [value, setValue] = useState("")

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

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
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>

        </div>

    );
}