import { useRouter } from 'next/router';


export default function Nav({ active }) {
    const router = useRouter();

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <button onClick={() => router.push('/')} className={`nav-link ${active == "Home" ? "active" : ""}`}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => router.push('/motion')} className={`nav-link ${active == "Motion" ? "active" : ""}`}>Motion</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => router.push('/graphics')} className={`nav-link ${active == "Graphics" ? "active" : ""}`}>Graphics</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => router.push('/about')} className={`nav-link ${active == "About" ? "active" : ""}`}>About</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => router.push('/contact')} className={`nav-link ${active == "Contact" ? "active" : ""}`}>Contact</button>
                    </li>
                </ul>
            </nav>
        </div>       
    )
}