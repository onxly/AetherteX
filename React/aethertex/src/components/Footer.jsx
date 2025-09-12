import "../stylesheets/footer.css";
function Footer(){
    const Year = new Date().getFullYear();
    return (
        <footer>
            <span>Copyright &copy; 2025-{Year} AetherteX | All Rights Reserved</span>
        </footer>
    )
} export default Footer