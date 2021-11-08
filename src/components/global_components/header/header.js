import Nav from '../../global_components/nav/nav';

import "./header.scss";


const Header = () => {
    return (
        <header className="header">
            <Nav />
            <h1>Everything You Love About Coffee</h1>
            <h2>We makes every day full of energy and taste
                Want to try our beans?
            </h2>
            <button type="button"
                className="">
                More</button>
        </header>
    )
}

export default Header;