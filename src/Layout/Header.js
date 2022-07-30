import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>No.19</h3>
        </div>

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
    </header>
  )
}

export default Header