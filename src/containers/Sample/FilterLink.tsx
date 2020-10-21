import { connect, useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '@/store/sample/actions';
import Link from '@/components/Sample/Link';
import React from 'react';
import { RootState } from '@/store';

type Props = {
  filter: string;
};

const FilterLink: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(setVisibilityFilter(props.filter));
  const visibilityFilter = useSelector(
    (state: RootState) => state.sample.visibilityFilter,
  );
  const active = props.filter === visibilityFilter;
  return <Link {...props} onClick={onClick} active={active} />;
};

export default FilterLink;
