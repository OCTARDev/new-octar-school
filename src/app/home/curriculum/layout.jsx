import CurriculumHeroSection from "./_sections/Hero";

export default function Layout({ children }) {
    return (
      <div>
        {/* Persistent Hero Section */}
        <CurriculumHeroSection />
        {/* Dynamic Sections (Like React Outlet) */}
        {children}
      </div>
    );
  }