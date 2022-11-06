import { useEffect, useReducer } from 'react';
import { to } from 'await-to-js';
import { reducer } from '../lib/reducer';
import { getProjectList, getProjectByCategory } from '@src/lib/project';
import { ProjectCategoryType } from '../lib/constants';
import type { ProjectType, State } from '../types';

const useFetch = (selected?: ProjectCategoryType): State<ProjectType> => {
  const [state, dispatch] = useReducer(reducer, { _TAG: 'IDLE' });

  useEffect(() => {
    const fetchProjectList = async () => {
      /* selected 가 Undefined가 아니면 getProjectByCategory 호출, 아니면 getProjectList 호출*/
      const willFetch = selected ? getProjectByCategory : getProjectList;

      dispatch({
        _TAG: 'FETCH',
      });

      const [error, response] = await to(willFetch(selected));

      if (error) {
        return dispatch({
          _TAG: 'FAILED',
          error,
        });
      }

      if (response) {
        return dispatch({ _TAG: 'SUCCESS', data: response });
      }
    };

    fetchProjectList();
  }, [selected]);

  return state;
};

export default useFetch;
