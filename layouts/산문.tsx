type PageProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
};

const 산문: React.FC<PageProps> = ({ title, subtitle, children }) => (
  <div>
    <header className="page-header">
      <h1 className="project-name">{title}</h1>
      <h1 className="project-subtitle">{subtitle}</h1>
      {/* Add your download buttons here if needed */}
    </header>
    {/* Add your category list here */}
    <button type="button" id="header-links-toggler">목차 열기</button>
    <aside id="header-links" aria-label="header links"></aside>
    <main id="content" className="main-content">
      {children}
      <hr />
    </main>
  </div>
);

export default 산문;