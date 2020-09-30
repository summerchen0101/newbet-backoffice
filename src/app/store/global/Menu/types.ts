type MenuItem = {
  name: string;
  path?: string;
  child?: MenuItem[];
  icon?: string;
};

export interface MenuState {
  menu: MenuItem[];
  collapsed: boolean;
}
