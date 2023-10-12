import Link from "next/link";

/*Contact - ultimately what you want is for a lead to see your portfolio
and contact you so you should include your contact details (email
  address, telephone number, etc).*/

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div className="header">
    <Link href="/">
      <p style={linkStyle}>Home</p>
    </Link>
    <Link href="/projects">
      <p style={linkStyle}>Projects</p>
    </Link>
    <Link href="/about">
      <p style={linkStyle}>About</p>
    </Link>
    <style jsx>
      {`
        .header {
          display: flex;
          border-bottom: rgba(0, 0, 0, 0.08) 1px solid;
          text-transform: uppercase;
          justify-content: center;
          background-color: #fde5ec;
          border-radius: 10px;
        }
        p {
          color: white;
          background-color: #fcbaad;
          border-radius: 10px;
          margin: 15px;
          padding: 5px;
        }
        p:hover {
          background-color: rgb(255, 160, 150);
          color: black;
        }
      `}
    </style>
  </div>
);

export default Header;
