import React from 'react'
import '../../../assets/style/footer.css';
import qrcode from "../../../assets/images/qrcode.png";
import gplay from '../../../assets/images/google-play-badge-128x128.png';
import applest from "../../../assets/images/app-store-badge.png"
import footer_img from "../../../assets/images/icon.png";
const Foot = () => {
  return (<>
    <div className="container" id="footer">
      <div className='footer_content'>
        <div className="banner">
          <div><img className="footer_logo" src={footer_img} /><span id="title">Directly</span></div>
          <div id="subtitle">Transforming Job Search</div>
        </div>
        <div >
          <table className='links'>
            <tr>
              <th>Links</th>
              <th>Legal</th>
              <th>Resources</th>
            </tr>
            <tr>
              <td>Download Directly App</td>
              <td>Privacy Policy</td>
              <td>Blog</td>
            </tr>
            <tr>
              <td>Free Job Alerts</td>
              <td>User Terms & Conditions</td>
              <td>Sitemap</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td>Employer Terms of Service</td>
            </tr>
            <tr>
              <td>Contact Us</td>
              <td>Employer FAQs</td>
            </tr>
            <tr>
              <td>Vulnerability Disclosure Policy</td>
              <td>Community Guidelines</td>
            </tr>
            <tr>
              <td>International Jobs</td>
            </tr>
          </table>
        </div>
        <div className='badge'>
          <table className='social'>
            <tr><th colSpan={5}>Follow us on social media</th></tr>
            <tr id="socials"><td><a><img></img></a></td><td><a><img></img></a></td><td><a><img></img></a></td><td><a><img></img></a></td><td><a><img></img></a></td></tr>
            <tr><td colSpan={2}>© 2024 Directly | All rights reserved</td><td>Privacy Policy</td>
              <td colSpan={2}>Terms & Conditions</td></tr>
          </table>
          <table className='app'>
            <tr><th className='textgrd'>Apply on the Go</th><td rowSpan={2}><img className="qr" src={qrcode} /></td></tr>
            <tr><td>Get real time job updates on our App</td></tr>
            <tr><td colSpan={2}><a><img className="apple-store" src={applest} /></a><a><img className="gplay-store" src={gplay} /></a></td></tr>
          </table>
        </div>
      </div>
    </div>

    <div className="foot"></div>
  </>
  )
}

export default Foot