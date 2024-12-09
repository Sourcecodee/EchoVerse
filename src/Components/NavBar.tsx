import { Link } from "react-router-dom"

// navBar component
const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-auto">
        {/* left text */}
        <div className="text-white md:text-xl">
            <Link to={'/'}>
              EchoVerse
            </Link>
        </div>

        <div className="flex flex-row justify-center items-center">
            
            <div className="text-white mb-0.5 hidden sm:flex">Menu</div>
            
            <div className="flex flex-col justify-center py-1 items-center hover: cursor-pointer h-8 gap-1">
                <div className="w-6 bg-white h-0.5"></div>
                <div className="w-6 bg-white h-0.5"></div>
            </div>
        
        </div>
    
    </div>
  )
}

export default NavBar