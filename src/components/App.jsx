import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { Layout } from "../components/Layout/Layout";
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import courses from "./courses.json";

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const CoursesPage = lazy(() => import('pages/Courses'));
const OfficePage = lazy(() => import('pages/Office/Office'));
const ProfilePage = lazy(() => import('pages/Profile'));
const BonusPage = lazy(() => import('pages/Bonus'));
const LearnPage = lazy(() => import('components/Learn/Learn'));
const LessonPage = lazy(() => import('components/Lesson/Lesson'));

export default function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
    ) : (  
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/courses" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/courses" component={<LoginPage />} />
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute redirectTo="/login" component={<CoursesPage courses={courses} />} />
          }
        />
        <Route path="/courses/:courseId" element={<LearnPage />} />
        <Route path="/courses/:courseId/:lessonId" element={<LessonPage />} />
        <Route
          path="/learn"
          element={
            <PrivateRoute redirectTo="/login" component={<LearnPage />} />
          }
        />
        <Route
          path="/office"
          element={
            <PrivateRoute redirectTo="/login" component={<OfficePage />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        />
        <Route
          path="/bonus"
          element={
            <PrivateRoute redirectTo="/login" component={<BonusPage />} />
          }
        />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};