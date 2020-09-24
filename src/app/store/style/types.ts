export interface StyleState {
  theme: string;
}

interface ChangeThemeAction {
  type: string;
  theme: string;
}

export type StyleActionTypes = ChangeThemeAction;
