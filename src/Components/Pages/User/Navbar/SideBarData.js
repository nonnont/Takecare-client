import React from "react";

import * as AiIcons from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { FaGrinAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaTable, FaRegCalendarAlt } from "react-icons/fa";

export const SidebarData = [
  {
    title: "หน้าหลัก",
    path: "/user/index",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "แบบทดสอบ",
    path: "/user/quiz",
    icon: <FaFileAlt />,
    cName: "nav-text",
  },
  {
    title: "กิจกรรม",
    path: "/user/activity",
    icon: <FaGrinAlt />,
    cName: "nav-text",
  },
  {
    title: "เลือกเวลานัด",
    path: "/user/meet",
    icon: <FaRegCalendarAlt />,
    cName: "nav-text",
  },
  {
    title: "ตารางนัด",
    path: "/user/schedule",
    icon: <FaTable />,
    cName: "nav-text",
  },
];
