import React from 'react';
import { SelectTypes } from '../../../utils/getSelectOptions';
import './Select.scss';

type ItemOptionsType = {
  value: string,
  label: string,
  selected?: boolean,
  className: string,
  ref: React.RefObject<HTMLLIElement>,
  handler: (e: React.MouseEvent<HTMLLIElement>) => void,
}

type OptionsType = {
  label: string,
  icon: string,
  className: string,
  iconClassName: string,
  handler: (e: React.MouseEvent<HTMLDivElement>) => void,
  options: Array<ItemOptionsType>
}

type PropsType = {
  selectOptions: OptionsType,
  sortType: string,
}

const Select: React.FC<PropsType> = ({ selectOptions, sortType }) => {
  return (
    <>
      <div className="results__sort">
        <span className="results__title">{selectOptions.label}</span>
        <div className={selectOptions.className} onClick={selectOptions.handler}>
          <div className="select__header">
            <span className="select__current">{sortType === SelectTypes.RATING ? sortType : SelectTypes.YEAR}</span>
            <div className={selectOptions.iconClassName}></div>
          </div>
          <div className="select__body">
            <ul className="select__options">
              {selectOptions.options.map((option) => (
                <li
                  className={option.className}
                  key={option.value}
                  ref={option.ref}
                  data-value={option.value}
                  onClick={option.handler}>
                    {option.label}
                </li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default Select;
