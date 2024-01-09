import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiScrum } from "react-icons/di";
import { BiLogoJavascript, BiLogoReact, BiLogoDocker } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiJest, SiTailwindcss, SiVite, SiMysql, SiNodedotjs, SiExpress, SiMongodb, SiPython } from "react-icons/si";
import { FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { BsFillKanbanFill } from "react-icons/bs";

const minhasHabilidades = [
    {
        name: 'HTML',
        icon: <AiFillHtml5 />,
    },
    {
        name: 'CSS',
        icon: <DiCss3 />,
    },
    {
        name: 'Javascript',
        icon: <BiLogoJavascript />,
    },
    {
        name: 'Python',
        icon: <SiPython />
    },
    {
        name: 'React',
        icon: <BiLogoReact />,
    },
    {
        name: 'Redux',
        icon: <TbBrandRedux />,
    },
    {
        name: 'Docker',
        icon: <BiLogoDocker />,
    },
    {
        name: 'NodeJs',
        icon: <SiNodedotjs />
    },
    {
        name: 'Express',
        icon: <SiExpress />
    },
    {
        name: 'MySQL',
        icon: <SiMysql />,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
    },
    {
        name: 'Jest',
        icon: <SiJest />,
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap />,
    },
    {
        name: 'TailwindCss',
        icon: <SiTailwindcss />,
    },
    {
        name: 'Git',
        icon: <FaGitAlt />,
    },
    {
        name: 'Github',
        icon: <FaGithub />,
    },

    {
        name: 'Vite',
        icon: <SiVite />,
    },
    {
        name: 'Scrum',
        icon: <DiScrum />,
    },
    {
        name: 'Kanban',
        icon: <BsFillKanbanFill />,
    }
]


export default minhasHabilidades;