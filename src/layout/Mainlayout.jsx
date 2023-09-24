import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

const Mainlayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Nav></Nav>
            <div className="w-11/12 mx-auto">
                
                {
                    navigation.state === 'loading' && 'loading...'
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;