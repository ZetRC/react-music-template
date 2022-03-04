import { AiOutlineArrowRight } from "react-icons/ai"

const Sidebar = () =>{
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li className="selected-element">
                        Artists
                        <AiOutlineArrowRight/>
                    </li>
                    <li>Element Two</li>
                    <li>Element Three</li>
                    <li>Element Four</li>
                    <li>Element Five</li>
                </ul> 
            </div>       
        </>
    )
}

export default Sidebar;