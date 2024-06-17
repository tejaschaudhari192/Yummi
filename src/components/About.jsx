import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export default function About() {
    const { setUser } = useContext(UserContext);

    return (
        <div className="mt-28">
            <span>SetUser </span>
            <input className="" placeholder="enter name" onChange={(e) => {
                setUser(e.target.value);
            }}></input>
        </div>
    )
}