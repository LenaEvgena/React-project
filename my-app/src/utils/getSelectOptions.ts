import classNames from 'classnames';

export const getSelectOptions = (
  showOptions: boolean, isFetching: boolean, handler: (e: React.MouseEvent<HTMLDivElement>) => void,
  handler1: () => void, handler2: () => void, ref1: any, ref2: any) => {

  return {
    label: 'sort by',
    icon: '',
    className: classNames('select',
      { 'active': showOptions },
      { 'busy': isFetching }
    ),
    iconClassName: 'select__icon',
    handler: handler,
    options: [
      { value: 'RATING', label: 'rating', selected: true, className: 'select__option', ref: ref1, handler: handler1 },
      { value: 'YEAR', label: 'release date', selected: false, className: 'select__option', ref: ref2, handler: handler2 },
    ],
  }
}
