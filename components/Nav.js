import { useRouter } from 'next/router';

export default function Nav({ active }) {
    const router = useRouter();

    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button onClick={() => router.push('/')} className={`nav-link ${active == "Home" ? "active" : ""}`}>Home</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={() => router.push('/motion')} className={`nav-link ${active == "Motion" ? "active" : ""}`}>Motion</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={() => router.push('/graphics')} className={`nav-link ${active == "Graphics" ? "active" : ""}`}>Graphics</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={() => router.push('/about')} className={`nav-link ${active == "About" ? "active" : ""}`}>About</button>
                            </li>
                            <li class="nav-item">
                                <button onClick={() => router.push('/contact')} className={`nav-link ${active == "Contact" ? "active" : ""}`}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>       
    )
}