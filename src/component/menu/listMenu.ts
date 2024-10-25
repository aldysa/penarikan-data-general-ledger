// import { ReactNode } from "react";

// export interface IRoute {
//   key?: string;
//   label: string;
//   link: string;
//   icon?: ReactNode;
//   children?: IRoute[];
// }

// export const menuItems: IRoute[] = [
//   {
//     label: "Process - 1",
//     key: "1",
//     link: "/",
//   },
//   {
//     label: "Content Management",
//     link: "#",
//     children: [
//       {
//         label: "All Content",
//         key: "2",
//         link: "/content",
//       },
//       {
//         label: "Manage Content",
//         key: "3",
//         link: "/content/add",
//       },
//     ],
//   },
// ];

import { ReactNode } from "react";

export interface IRoute {
  key?: string;
  label: string;
  link: string;
  icon?: ReactNode;
  children?: IRoute[];
}

export const menuItems: IRoute[] = [
  {
    label: "Process - 1",
    key: "1",
    link: "/",
  },
  {
    label: "Add Page",
    key: "add-page",
    link: "/add-page",
  },
];
