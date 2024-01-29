import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { LendingLayout } from './LendingLayout/LendingLayout';
import { HomeLayout } from "./HomeLayout/HomeLayout";
import { BonusLayout } from "./BonusLayout/BonusLayout";
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const LendingPage = lazy(() => import('../pages/Lending'));
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const GamePage = lazy(() => import('./Game/Game'));
const TournamentPage = lazy(() => import('./Tournament/Tournament'));
const DonatPage = lazy(() => import('./Donat/Donat'));
const WithdrawalPage = lazy(() => import('./Withdrawal/Withdrawal'));
const IndicatorsPage = lazy(() => import('./Indicators/Indicators'));
const HistoryPage = lazy(() => import('./History/History'));
const ToolsPage = lazy(() => import('./Tools/Tools'));
const StructurePage = lazy(() => import('../pages/Structure'));
const RulesPage = lazy(() => import('./Rules/Rules'));
const DiaryPage = lazy(() => import('../pages/Diary'));
const LearnPage = lazy(() => import('../components/Learn/Learn'));
const CoursePage = lazy(() => import('../components/Course/Course'));
const LessonPage = lazy(() => import('../components/Lesson/Lesson'));

export default function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Оновлення користувача...</b>
    ) : (  
    <Routes>
      <Route path="/" element={<LendingLayout />}>
        <Route index element={<LendingPage />} />
        <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/uk" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/uk" component={<LoginPage />} />
            }
          />
        <Route
            path="/uk"
            element={
              <PrivateRoute redirectTo="/login" component={<HomeLayout />} />
            }
        >
          <Route index element={<HomePage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="learn/:courseId" element={<CoursePage />} >
            <Route path=":lessonId" element={<LessonPage />} />
          </Route>
          <Route path="game" element={<GamePage />} />
          <Route path="tournament" element={<TournamentPage />} />
          <Route path="donat" element={<DonatPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="bonus" element={<BonusLayout />} >
            <Route path="" element={<IndicatorsPage />} >
              <Route path="withdrawal" element={<WithdrawalPage />} />
              <Route path="history" element={<HistoryPage />} />
            </Route>
            <Route path="tools" element={<ToolsPage />} />
            <Route path="team" element={<StructurePage />} />
            <Route path="rules" element={<RulesPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<LendingPage />} />
    </Routes>
  );
};