export type Filter = {
  text: string;
  isFilterOn?: boolean;
  key: string;
};

export type Project = {
  key: string;
  name: string;
  filters: Filter[];
  year: number;
  imageReel: string[] | [];
};

export type GlobalState = {
  activeFilters: Filter[];
  idleFilters: Filter[];
  areIdleFiltersShown: boolean;
  currentActiveProject: Project | null;
};

export type MainButtonProps = {
  text: string;
  onClick?: () => void;
  isButtonACircle: boolean;
};

export const mainButtonProps = {
  text: {
    type: String,
    default: '',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  isButtonACircle: {
    type: Boolean,
    default: false,
  },
};

export const generalTagProps = {
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
