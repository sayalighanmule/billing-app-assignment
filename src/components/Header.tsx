export default function MyHeader() {

  return (
      <div className="header">
        <div className="title-wrapper">
            <svg className="logo-icon" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="white" opacity="0.2"/>
                <text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="45" font-weight="bold" dy=".3em">B</text>
            </svg>

            <div className="header-title">Billing App</div>
        </div>
    </div>
  );
}
