import { BsFillHouseFill, BsCurrencyDollar, BsListUl, BsFillGearFill } from "react-icons/bs"
import { IoIosPaperPlane, IoMdAnalytics, IoIosHelpBuoy } from "react-icons/io"
import { AiTwotoneFilePpt } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"

const navLinks = [
  {
    icon: <BsFillHouseFill />,
    label: "Home",
    link: "/"
  },
  {
    icon: <BsCurrencyDollar />,
    label: "Quotes",
    link: "/quotes"
  },
  {
    icon: <BsListUl />,
    label: "Leads",
    link: "/leads"
  },
  {
    icon: <IoIosPaperPlane />,
    label: "Tours",
    link: "/tours"
  }
]

const officeLinks = [
  {
    icon: <AiTwotoneFilePpt />,
    label: "Invoices",
    link: "/invoices"
  },
  {
    icon: <IoMdAnalytics />,
    label: "Analytics",
    link: "/analytics"
  },
  {
    icon: <FaUsers />,
    label: "Team",
    link: "/team"
  },
  {
    icon: <BsFillGearFill />,
    label: "Admin",
    link: "/admin"
  },
  {
    icon: <IoIosHelpBuoy />,
    label: "Support",
    link: "/support"
  }
]

export { navLinks, officeLinks }
