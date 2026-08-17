import './Footer.css'
function Footer(){
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Ing. Martin Jevin</p>
            <a href="mailto:martin.jevin.mj@gmail.com">martin.jevin.mj@gmail.com</a>
        </footer>
    )
}
export default Footer;