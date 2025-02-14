import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const links = [
    {
        icon: <FaGithub />
        , path: "https://github.com/NKCuongz1901"
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/nkcuong1901/"
    },
    {
        icon: <FaLinkedin />,
        path: "#"
    },
];

function Socials({ containerStyles, iconStyles }: { containerStyles: any, iconStyles: any }) {
    return (
        <div className={containerStyles}>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={iconStyles} target="_blank">{link.icon}</Link>
                )
            })}
        </div>
    )
}

export default Socials