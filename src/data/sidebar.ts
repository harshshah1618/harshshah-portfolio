import { LuMegaphone, LuUser, LuCpu, LuWrench, LuNewspaper } from "react-icons/lu";

export const sidebar = {
  userName: `Harsh Shah`,
  sections: [
    {
      title: `Updates`,
      url: `updates`,
      icon: LuMegaphone
    },
    {
      title: `About Me`,
      url: ``,
      icon: LuUser
    },
    {
      title: `Skills`,
      url: `skills`,
      icon: LuCpu
    },
    {
      title: `Projects`,
      url: `projects`,
      icon: LuWrench
    },
    {
      title: `Articles`,
      url: `articles`,
      icon: LuNewspaper
    }
  ]
};