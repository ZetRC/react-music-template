import { AiOutlineSearch } from "react-icons/ai"
import { MdQueueMusic } from "react-icons/md"
import { FaBars } from "react-icons/fa"

const Navbar = () =>{
    return(
        <>
            <nav>
                <label htmlFor="logo">
                    <MdQueueMusic/>
                    ArtistTracker
                </label>
                <FaBars className="bars-icon"/>
                <div className="input-container">
                    <AiOutlineSearch /> 
                    <input type="text" placeholder="Search an artist / band"/>
                </div>
                <a href="#">About</a>
            </nav>
        </>
    )
}

export default Navbar;