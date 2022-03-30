import React from "react";

import * as AiIcons from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { FaTable, FaRegCalendarAlt } from "react-icons/fa";

export const SidebarData = [
  {
    title: "หน้าหลัก",
    path: "/psychologist/index",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  // {
  //   title: "จองเวลานัด",
  //   path: "/psychologist/reserve",
  //   icon: <FaRegCalendarAlt />,
  //   cName: "nav-text",
  // },
  {
    title: "สร้างการนัด",
    path: "/psychologist/meet",
    icon: <FaRegCalendarAlt />,
    cName: "nav-text",
  },

  {
    title: "ตารางนัด",
    path: "/psychologist/schedule",
    icon: <FaTable />,
    cName: "nav-text",
  },
];
