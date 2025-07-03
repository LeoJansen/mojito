import { navLinks } from "../../constants"


const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Velvep Pour Logo" className="w-12 h-12" />
                    <p>Velvep Pour</p>
                    <ul className="px-8">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="font-semibold">
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