import CreateNewCard from "./CreateNewCard.tsx";
import TaskCard from "./TaskCard.tsx";
import AddLabelsCard from "./AddLabelsCard.tsx";
import Navigation from "./Navigation.tsx";
import AssignTo from "./AssignTo.tsx";
import ProjectCard from "./ProjectCard.tsx";
import WeeklyProgress from "./WeeklyProgress.tsx";
import Activity from './Activity.tsx';
import SubTaskCard from './SubTaskCard.tsx';
import TaskProgress from './TaskProgress.tsx';
import Buttons from './Buttons.tsx';
import FilesAttachment from './FilesAttachment.tsx';
import Alerts from './Alerts.tsx';

function Home() {
  return (
    <div className="grid grid-cols-4 gap-8 p-2 bg-neutral-100 min-h-screen items-start">
      <CreateNewCard />
      <TaskCard />
      <AddLabelsCard />
      <div className="col-span-4">
        <Navigation />
      </div>
      <AssignTo />
      <ProjectCard />
      <WeeklyProgress />
      <Activity />
      <SubTaskCard />
      <TaskProgress />
      <Buttons />
      <FilesAttachment />
      <Alerts />
    </div>
  );
}

export default Home;
