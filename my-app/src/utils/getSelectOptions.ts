import classNames from 'classnames';

export enum SelectTypes {
  RATING = 'RATING',
  YEAR = 'RELEASE DATE',
}

export const getSelectOptions = (showOptions: boolean, isFetching: boolean, handler: (e: React.MouseEvent<HTMLDivElement>) => void,
  handler1: (e: React.MouseEvent<HTMLLIElement>) => void, handler2: (e: React.MouseEvent<HTMLLIElement>) => void,
  ref1: React.RefObject<HTMLLIElement>, ref2: React.RefObject<HTMLLIElement>) => {

  return {
    label: 'sort by',
    icon: '',
    className: classNames('select',
      { 'active': showOptions },
      { 'busy': isFetching }
    ),
    iconClassName: classNames('select__icon',
      { 'open': showOptions },
    ),
    handler: handler,
    options: [
      { value: 'RATING', label: SelectTypes.RATING, className: 'select__option', ref: ref1, handler: handler1 },
      { value: 'YEAR', label: SelectTypes.YEAR, className: 'select__option', ref: ref2, handler: handler2 },
    ],
  }
}
