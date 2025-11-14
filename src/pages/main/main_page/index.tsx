import React, {FC} from "react";
import {Users} from "../../../components/users";

export const MainPage: FC = (): React.JSX.Element => {

    return (
        <div className="main-container">
            <Users/>
        </div>
    )
}