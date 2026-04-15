import './Contact.scss';

const INFO = [
  { label: '이름',     value: '이우현'      },
  { label: '희망지역', value: '서울 전 지역' },
];

const Contact = () => {
  return (
    <footer className="contact">
      <div className="contact-badge">Open to Work</div>

      <h2 className="contact-heading">
        함께 일하고 싶으시다면<br />
        언제든지 연락 주세요
      </h2>

      <p className="contact-desc">
        디자인을 이해하고 개발 흐름을 고려할 수 있는 퍼블리셔.<br />
        디자이너와 개발자 사이의 소통 비용을 줄이는 데 강점이 있습니다.
      </p>

      <div className="contact-info-grid">
        {INFO.map(({ label, value }) => (
          <div key={label} className="contact-info-cell">
            <p className="contact-info-label">{label}</p>
            <p className="contact-info-value">{value}</p>
          </div>
        ))}
      </div>

      <div className="contact-actions">
        <a
          className="contact-btn contact-btn--secondary"
          href="https://github.com/leewoohyeon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
              stroke="#ffd093" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          GitHub
        </a>

        <a
          className="contact-btn contact-btn--primary"
          href="mailto:wh8187@gmail.com?subject=포트폴리오 문의"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="#3a2010" strokeWidth="2" />
            <path d="M22 6l-10 7L2 6" stroke="#3a2010" strokeWidth="2" strokeLinecap="round" />
          </svg>
          이메일 보내기
        </a>
      </div>

      <p className="contact-footer">
        &copy; 2026 이우현 · Frontend Developer &amp; Publisher
      </p>
    </footer>
  );
};

export default Contact;
