import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Team from 'components/Team/Team';
import { getTeam } from 'redux/partners/operations';
import { selectIsLoading, selectPartner } from 'redux/partners/selectors';

export default function Structure() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const partner = useSelector(selectPartner);

  useEffect(() => {
    dispatch(getTeam()); 
  }, [dispatch]);

    return (
      <>
        <div>{isLoading && <b>Завантаження даних...</b>}</div>
        {partner && <Team />}
      </>
    );
  };