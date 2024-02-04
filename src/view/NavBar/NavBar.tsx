import {Component} from "react";
import logo from "../../assests/NavBar/Logo.png";
import Search from "../../assests/NavBar/Search.png"
import wishlist from "../../assests/NavBar/wishlist.png"
import Line from "../../assests/NavBar/Line 1.png";
import User from "../../assests/NavBar/User.png"

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="flex justify-between px-24">
                    <div className="flex">
                    <img src={logo} alt="logo"/>

                    <ul className="flex justify-between gap-5 text-white pt-6 pl-28">
                        <li className="text-xl">Sale</li>
                        <li className="text-xl">Products</li>
                        <li className="text-xl">Download</li>
                        <li className="text-xl">FAQ's</li>
                        <li className="text-xl">Support</li>
                    </ul>
                    </div>

                    <div className="grid grid-cols-4 pt-6">
                        <img src={Search} alt="search"/>
                        <img src={wishlist} alt="wishlist"/>
                        <img src={Line} alt="divider"/>
                        <img src={User} alt="user"/>
                    </div>
                </div>
            </>
        );
    }
}
