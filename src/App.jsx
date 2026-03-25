export default function App() {
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #f8fffb, #eef7f3)",
    padding: "40px 20px",
    color: "#1f2937",
    fontFamily:
      "'Pretendard', 'Noto Sans KR', system-ui, -apple-system, sans-serif",
    boxSizing: "border-box",
  };

  const containerStyle = {
    maxWidth: "420px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleWrapStyle = {
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "56px",
    fontWeight: 800,
    margin: 0,
    lineHeight: 1.1,
    color: "#111827",
  };

  const subtitleStyle = {
    marginTop: "14px",
    fontSize: "16px",
    color: "#6b7280",
    lineHeight: 1.6,
  };

  const heroCardStyle = {
    width: "100%",
    marginTop: "28px",
    borderRadius: "34px",
    border: "1px solid #d9f2e3",
    background: "linear-gradient(135deg, #eefcf4, #eefaf8)",
    padding: "32px 24px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const heroIconRowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    fontSize: "48px",
    marginBottom: "18px",
  };

  const heroMainTextStyle = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#374151",
    lineHeight: 1.5,
  };

  const heroSubTextStyle = {
    marginTop: "10px",
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: 1.7,
  };

  const sectionWrapStyle = {
    width: "100%",
    marginTop: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "28px",
    padding: "28px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    boxSizing: "border-box",
  };

  const iconStyle = {
    fontSize: "42px",
  };

  const badgeGreenStyle = {
    display: "inline-block",
    marginTop: "14px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "#ecfdf3",
    color: "#15803d",
    fontSize: "14px",
    fontWeight: 700,
  };

  const badgeOrangeStyle = {
    display: "inline-block",
    marginTop: "14px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "#fff4e8",
    color: "#c2410c",
    fontSize: "14px",
    fontWeight: 700,
  };

  const cardTitleStyle = {
    marginTop: "16px",
    marginBottom: "0",
    fontSize: "24px",
    fontWeight: 800,
    color: "#111827",
  };

  const cardTextStyle = {
    marginTop: "14px",
    marginBottom: 0,
    fontSize: "16px",
    color: "#6b7280",
    lineHeight: 1.7,
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "22px",
    color: "#16a34a",
    fontWeight: 700,
    fontSize: "18px",
    textDecoration: "none",
  };

  const gameButtonWrapStyle = {
    marginTop: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const gameButtonStyle = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    background: "#fff4e8",
    color: "#7c2d12",
    textDecoration: "none",
    padding: "16px 18px",
    borderRadius: "18px",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1.5,
  };

  const noteStyle = {
    width: "100%",
    marginTop: "24px",
    background: "rgba(255,255,255,0.75)",
    borderRadius: "24px",
    padding: "20px",
    color: "#6b7280",
    fontSize: "15px",
    lineHeight: 1.8,
    boxSizing: "border-box",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={titleWrapStyle}>
          <h1 style={titleStyle}>💚 돌봄 케어</h1>
          <div style={subtitleStyle}>사용자에 맞는 화면으로 바로 이동하세요</div>
        </div>

        <div style={heroCardStyle}>
          <div style={heroIconRowStyle}>
            <span role="img" aria-label="elderly">
              👴
            </span>
            <span style={{ fontSize: "34px" }} role="img" aria-label="connect">
              ↔️
            </span>
            <span role="img" aria-label="caregiver">
              🧑‍⚕️
            </span>
          </div>
          <div style={heroMainTextStyle}>
            보호자용 기록과 어르신용 인지 활동을
            <br />
            분리해 더 쉽게
          </div>
          <div style={heroSubTextStyle}>
            같은 서비스라도 사용하는 사람이 다르면
            <br />
            시작 화면도 달라야 합니다.
          </div>
        </div>

        <div style={sectionWrapStyle}>
          <a
            href="https://care-journal--arekoressss.replit.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...cardStyle, textDecoration: "none", display: "block" }}
          >
            <div style={iconStyle}>🧑‍⚕️</div>
            <div style={badgeGreenStyle}>보호자용</div>
            <h2 style={cardTitleStyle}>돌봄 일지</h2>
            <p style={cardTextStyle}>
              상태, 식사, 수면, 복약을 기록하고
              <br />
              가족 또는 기관과 공유합니다.
            </p>
            <div style={linkStyle}>보호자용 일지 열기 →</div>
          </a>

          <div style={cardStyle}>
            <div style={iconStyle}>👴</div>
            <div style={badgeOrangeStyle}>어르신용</div>
            <h2 style={cardTitleStyle}>인지 게임</h2>
            <p style={cardTextStyle}>
              어르신이 직접 쉽게 눌러서 시작할 수 있는
              <br />
              간단한 두뇌 활동입니다.
            </p>

            <div style={gameButtonWrapStyle}>
              <a
                href="https://dementia-memory-matc-4eiu.bolt.host/"
                target="_blank"
                rel="noopener noreferrer"
                style={gameButtonStyle}
              >
                🃏 카드 짝 맞추기 시작하기
              </a>

              <a
                href="https://claude.ai/public/artifacts/5d326767-e0ed-4409-8192-ff3b00be65df"
                target="_blank"
                rel="noopener noreferrer"
                style={gameButtonStyle}
              >
                🛒 시장 돈 계산 게임 시작하기
              </a>
            </div>
          </div>
        </div>

        <div style={noteStyle}>
          권장 구조: 첫 화면에서는 <strong>보호자용</strong>과{" "}
          <strong>어르신용</strong>만 먼저 나누고, 어르신용을 누르면
          그다음 화면에서 게임 2종 중 하나를 고르게 하는 방식이 가장
          자연스럽습니다.
        </div>
      </div>
    </div>
  );
}