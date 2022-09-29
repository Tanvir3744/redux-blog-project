import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../Assets/lws.svg'
const Header = () => {
    const blogs = useSelector(state => state)
    console.log(blogs);
    return (
        <div>
            <nav class="bg-slate-100 shadow-md">
                <div
                    class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
                >
                    <a href="index.html">
                        <img
                            class="h-10"
                            src={Logo}
                            alt="Learn with Sumit"
                        />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
