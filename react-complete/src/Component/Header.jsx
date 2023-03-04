const customCss = {
  backgroundColor: "red",
  color: "white",
};

function Header() {
  return (
    <div style={customCss} className="header">
      welcome to header
    </div>
  );
}
function Header1() {
  return <div className="header">welcome to header1</div>;
}
function Header2() {
  return (
    <div
      style={{ color: "white", backgroundColor: "black", borderRadius: "4px" }}
      className="header"
    >
      welcome to header2
    </div>
  );
}
export default Header;
export { Header1, Header2 };
