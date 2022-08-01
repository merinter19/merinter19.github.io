import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="/PageList">記事一覧</Link>
                </li>
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;