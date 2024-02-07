import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";

export class MainContent extends Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" Component={Home}></Route>
            </Routes>
            </>
        );
    }
}
