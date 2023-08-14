import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../shared/context/authContext';
import { useQuery } from 'react-query';
import { getMapData } from '../../api/backendApi';

const Map = () => {
  const mapId = useParams().mapId;
  const auth = useContext(AuthContext)

  const { isLoading, isError, data } = useQuery(["map", mapId], () => getMapData(mapId), {
    staleTime: 1000*60,
  })
  // const { data, loading, error} = useGetMapData(mapId, auth.isLoggedIn)
  return (
    <div>Map {!isLoading && !isError ? JSON.stringify(data,undefined, 4) : null}</div>
  )
}

export default Map