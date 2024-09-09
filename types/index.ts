export type Filter = {
  text: string;
  isFilterOn: boolean;
  key: string;
};

export type GlobalState = {
  activeFilters: Filter[];
  idleFilters: Filter[];
  areIdleFiltersShown: boolean;
};

export type GeneralButtonProps = {
  text: string;
  onClick?: () => void;
  isButtonACircle: boolean;
};

export const generalButtonProps = {
  text: {
    type: String,
    default: '',
  },
  onClick: {
    type: Function,
  },
  isButtonACircle: {
    type: Boolean,
    default: false,
  },
};

export const GeneralTagProps = {
  text: {
    type: String,
    default: '',
  },
  isTagActive: {
    type: Boolean,
    default: false,
  },
  key: {
    type: String,
    default: '',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
};
