import React from 'react';
import MainPage from './MainPage';
import AboutPage from './components/pages/AboutPage';
import ProjectPage from './components/pages/ProjectPage';
import SkillsPage from './components/pages/SkillsPage';
import EducationPage from './components/pages/EducationPage';
import Landing from './components/pages/Landing';

const App = () => {
  return (
    <MainPage>
      <Landing />
      <AboutPage />
      <EducationPage />
      <ProjectPage />
      <SkillsPage />
    </MainPage>
  );
};

export default App;
