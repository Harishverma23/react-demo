import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Login from '../Login';
import DashBoard from '../DashBoard';
import UserProfile from '../UserProfile';
import KnowledgeMgt from '../KnowledgeMgt';
import TotalRewards from '../TotalRewards';
import CareerDev from '../CareerDev';
import Policies from '../Policies';
import AttendanceLeave from '../AttendanceLeave';
import Travel from '../Travel';
import ToolProcess from '../ToolProcess';
import JoinerCorner from '../JoinerCorner';
import ProfileSettings from '../ProfileSettings';
import { 
  // LOGIN_PATH,
  // DASHBOARD_PATH,
  USER_PROFILE_PATH, 
  KNOWLEDGE_MGT_PATH, 
  TOTAL_REWARDS_PATH, 
  CAREER_DEV_PATH,
  POLICIES_PATH, 
  ATTENDANCE_LEAVE_PATH, 
  TRAVEL_PATH, 
  TOOL_PROCESS_PATH, 
  JOINER_CORNER_PATH, 
  SETTINGS_PATH
} from '../../constants/routes';
/* Lazy page import */
// const DashBoard = React.lazy(() => import('../DashBoard'));


const PageRoutes = () => {
  const generateRoutes = () => {
    return (
      <Routes>
        <Route index element={<DashBoard />} />
        <Route path={USER_PROFILE_PATH} element={<UserProfile />} />
        <Route path={KNOWLEDGE_MGT_PATH} element={<KnowledgeMgt />} />
        <Route path={TOTAL_REWARDS_PATH} element={<TotalRewards />} />
        <Route path={CAREER_DEV_PATH} element={<CareerDev />} />
        <Route path={POLICIES_PATH} element={<Policies />} />
        <Route path={ATTENDANCE_LEAVE_PATH} element={<AttendanceLeave />} />
        <Route path={TRAVEL_PATH} element={<Travel />} />
        <Route path={TOOL_PROCESS_PATH} element={<ToolProcess />} />
        <Route path={JOINER_CORNER_PATH} element={<JoinerCorner />} />
        <Route path={SETTINGS_PATH} element={<ProfileSettings />} />
      </Routes>
    );
  };

  const routes = generateRoutes();
  return <div>{routes}</div>
};

export default PageRoutes;
