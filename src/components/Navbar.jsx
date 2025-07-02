import { navLinks } from "../../constants"


const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="home" className="flex items-center gap-2">
                    <p>Velvep Pour</p>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="text-indigo-700 hover:text-indigo-900">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </a>
            </div>
        </nav>
    )
}

export default Navbar