import '../styles/Footer.css';

const Footer = () => {
  
    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="contact">
              <h2>Contact Us</h2>
              {/* <p>If you have any questions, please feel free to contact us:</p> */}
              <a href="mailto:mercedes-benz@gmail.com" className="mail-link">
                mercedes-benz@gmail.com
              </a>
            </div>
          </div>
        </footer>
      );
    // return (
    //     <div>
    //         <p>Footer component...</p>
    //     </div>
    // );
};

export default Footer;