import {Component} from "react";
import {NavBar} from "../../NavBar/NavBar";
import {MainContent} from "../../MainContent/MainContent";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <MainContent/>
            </>
        );
    }
}
