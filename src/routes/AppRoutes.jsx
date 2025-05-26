import { Routes, Route } from "react-router-dom";
 import HomePage from "../pages/HomePage";
 import CoursesPage from "../pages/CoursesPage";
 import LoginPage from "../pages/LoginPage";
 import RegisterPage from "../pages/RegisterPage";
 import BecomeTeacherPage from "../pages/BecomeTeacherPage";
 import CallPage from "../pages/CallPage";
 import CenterPage from "../pages/CenterPage";
 import AskPage from "../pages/AskPage"; // Make sure this file exists
import TeacherList from "../pages/TeachersList";
import AddCenterPage from "../pages/AddCenterPage";
import AddCoursePage from "../pages/AddCoursePage";
// import Tchatbots from "../pages/MiniChat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/teacher" element={<BecomeTeacherPage />} />
      <Route path="/call" element={<CallPage />} />
      <Route path="/centers" element={<CenterPage />} />
      <Route path="/askpage" element={<AskPage />} />
      <Route path="/addcenter" element={<AddCenterPage />} />
      <Route path="/addcourse" element={<AddCoursePage />} />
      <Route path="/teacherlist" element={<TeacherList />} />
      {/* <Route path="/chatbots" element={<Tchatbots />} /> */}
      {/* <Route path="/chatbots" element={<chatbots />} /> */}
    </Routes>
  );
};

export default AppRoutes;
