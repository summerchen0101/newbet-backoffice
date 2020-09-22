type IMenu = {
  name: string;
  path?: string;
  child?: IMenu[];
  icon?: string;
};
type IProps = {
  menu: IMenu[];
};
const initState: IProps = {
  menu: [
    { name: 'Home', path: '/home', icon: 'desktop' },
    { name: 'Profile', path: '/profile', icon: 'user' },
    {
      name: 'User',
      child: [
        { name: 'Tom', path: '/tom' },
        { name: 'Jack', path: '/jack' },
      ],
      icon: 'team',
    },
  ],
};

export default ()
