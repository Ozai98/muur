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
  client: string;
  description: string;
  imageReel: string[];
};

export type GlobalState = {
  activeFilters: Filter[];
  idleFilters: Filter[];
  areIdleFiltersShown: boolean;
  currentActiveProject: Project | null;
  projects: Project[];
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
    type: Function as PropType<() => void>,
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
