import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getIndicators } from 'redux/partners/operations';
import { selectIsLoading } from 'redux/partners/selectors';
import IndicatorsList from "components/IndicatorsList/IndicatorsList";

export default function Indicators() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndicators()); 
  }, [dispatch]);

  return (
    <>
        <div>{isLoading && <b>Завантаження даних...</b>}</div> 
        <IndicatorsList/> 
    </>
  );       
};