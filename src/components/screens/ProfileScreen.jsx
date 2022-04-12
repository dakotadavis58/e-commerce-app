import { useContext, useEffect, useReducer } from 'react';
import { Store } from '../../Store';

const ProfileScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return <div>Profile Screen</div>;
};

export default ProfileScreen;
