import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="head">
          <div className="center-head">
            <div className="left-head"></div>
            <div className="right-head">
              <ul className="list-top">
                <li>プロフィール</li>
                <li>趣味</li>
                <li>お問い合わせ</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="contents">
          <div className="grid">
            <div className="content">
              <img src="/Users/tamuratakasuke/original_application/origin_app/public/IMG_0387.JPG" alt="" />
            </div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
          </div>
        </div>
      </main>
      <footer>
      <div class="copyright">Copyright © ORIGIN APP All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
