import './Footer.css'
function Footer(){
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Meno Priezvisko</p>
            <a href="mailto:martin.jevin.mj@gmail.com">martin.jevin.mj@gmail.com</a>
        </footer>
    )
}
export default Footer;