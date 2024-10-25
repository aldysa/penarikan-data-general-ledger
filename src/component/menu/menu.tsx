// import React, { useEffect, useState } from "react";
// import { Menu, MenuProps } from "antd";
// import { Link, useLocation } from "react-router-dom";
// import { IRoute, menuItems } from "./listMenu";

// type MenuItem = Required<MenuProps>["items"][number];

// const getItem = (
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: IRoute[],
//   type?: "group"
// ): MenuItem => {
//   return {
//     key: key as string,
//     icon,
//     children: children && getMenuItems(children),
//     label,
//     type,
//   };
// };

// const getMenuItems = (routes: IRoute[] | undefined): MenuItem[] => {
//   if (!routes) return [];

//   return routes.map((item) => {
//     const { label, icon, link, key, children } = item;
//     return getItem(
//       <Link to={link}>{label}</Link>,
//       key ? key : "1",
//       icon ? icon : undefined,
//       children
//     );
//   });
// };

// const SideMenu: React.FC = () => {
//   const location = useLocation();
//   const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
//   const [openKeys, setOpenKeys] = useState<string[]>([]);

//   useEffect(() => {
//     const currentPath = location.pathname;
//     const foundItem = menuItems.find((item) => {
//       if (item.link === currentPath) {
//         return true;
//       } else if (item.children) {
//         return item.children.some((child) => child.link === currentPath);
//       }
//       return false;
//     });

//     if (foundItem) {
//       if (currentPath !== foundItem.link) {
//         foundItem.children?.forEach((child) => {
//           if (child.link === currentPath) {
//             setSelectedKeys([child.key || ""]);
//           }
//         });
//         setOpenKeys([foundItem.key || ""]);
//       }

//       if (currentPath === foundItem.link) {
//         setSelectedKeys([foundItem.key || ""]);
//         setOpenKeys([foundItem.key || ""]);
//       }
//     }
//   }, [location.pathname]);

//   const items: MenuItem[] = getMenuItems(menuItems);

//   useEffect(() => {
//     console.log(openKeys);
//   }, [openKeys]);

//   return (
//     <>
//       {/* <img src={ASSETS.LOGOMF} alt="logo" className="hidden md:block" /> */}
//       {openKeys.length > 0 && (
//         <Menu
//           style={{ backgroundColor: "none" }}
//           mode="inline"
//           items={items}
//           selectedKeys={selectedKeys}
//           defaultOpenKeys={openKeys}
//         />
//       )}
//     </>
//   );
// };

// export default SideMenu;

import React, { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import { IRoute, menuItems } from "./listMenu";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: IRoute[],
  type?: "group"
): MenuItem => {
  return {
    key: key as string,
    icon,
    children: children && getMenuItems(children),
    label,
    type,
  };
};

const getMenuItems = (routes: IRoute[] | undefined): MenuItem[] => {
  if (!routes) return [];

  return routes.map((item) => {
    const { label, icon, link, key, children } = item;
    return getItem(
      <Link to={link}>{label}</Link>,
      key ? key : "1",
      icon ? icon : undefined,
      children
    );
  });
};

const SideMenu: React.FC = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [dynamicPages, setDynamicPages] = useState<IRoute[]>([]);

  useEffect(() => {
    const currentPath = location.pathname;
    const foundItem = [...menuItems, ...dynamicPages].find((item) => {
      if (item.link === currentPath) {
        return true;
      }
      return false;
    });

    if (foundItem) {
      setSelectedKeys([foundItem.key || ""]);
      setOpenKeys([foundItem.key || ""]);
    }
  }, [location.pathname, dynamicPages]);

  const items: MenuItem[] = getMenuItems([...menuItems, ...dynamicPages]);

  const handleAddPage = () => {
    const newPage: IRoute = {
      label: `New Page ${dynamicPages.length + 1}`,
      key: `new-page-${dynamicPages.length + 1}`,
      link: `/new-page-${dynamicPages.length + 1}`,
    };
    setDynamicPages([newPage, ...dynamicPages]); // Add new page to the top
  };

  const handleRemovePage = (key: string) => {
    setDynamicPages(dynamicPages.filter((page) => page.key !== key));
  };

  return (
    <>
      {openKeys.length > 0 && (
        <Menu
          style={{ backgroundColor: "none" }}
          mode="inline"
          items={items}
          selectedKeys={selectedKeys}
          defaultOpenKeys={openKeys}
        />
      )}
      <button onClick={handleAddPage}>Add Page</button>
      {dynamicPages.map((page) => (
        <div key={page.key}>
          <Link to={page.link}>{page.label}</Link>
          <button onClick={() => handleRemovePage(page.key || "")}>-</button>
        </div>
      ))}
    </>
  );
};

export default SideMenu;
