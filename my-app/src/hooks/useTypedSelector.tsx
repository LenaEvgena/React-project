import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { InitialStateType } from './../types/types'

export const useTypedSelector: TypedUseSelectorHook<InitialStateType> = useSelector;

