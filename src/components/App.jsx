import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { Layout } from "../components/Layout/Layout";
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ProfilePage = lazy(() => import('pages/Profile'));
const BonusPage = lazy(() => import('pages/Bonus'));
const DiaryPage = lazy(() => import('pages/Diary'));
const LearnPage = lazy(() => import('components/Learn/Learn'));
const CoursePage = lazy(() => import('components/Course/Course'));
const LessonPage = lazy(() => import('components/Lesson/Lesson'));

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
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/learn" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/learn" component={<LoginPage />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        />
        <Route
          path="/learn"
          element={
            <PrivateRoute redirectTo="/login" component={<LearnPage />} />
          }
        />
        <Route path="/learn/:courseId" element={<CoursePage />} >
          <Route path="/learn/:courseId/:lessonId" element={<LessonPage />} />
        </Route>
        <Route
          path="/diary"
          element={
            <PrivateRoute redirectTo="/login" component={<DiaryPage />} />
          }
        />
        <Route path="/bonus" element={<BonusPage />} />
        {/* <Route
          path="/bonus"
          element={
            <PrivateRoute redirectTo="/login" component={<BonusPage />} />
          }
        /> */}
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};