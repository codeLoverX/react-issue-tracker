import Link from "next/link";
import { Fragment } from "react";
const links = [
    { href: 'https://react.dev', label: 'Dashboard', src: '/icons/trello.svg' },
    { href: 'https://react.dev', label: 'Settings', src: '/icons/settings.svg' },
    { href: 'https://react.dev', label: 'User', src: '/icons/user-check.svg' },
    { href: 'https://react.dev', label: 'Layout', src: '/icons/layout.svg' },
    { href: 'https://react.dev', label: 'Schedule', src: '/icons/calendar.svg' },
]
export default function Drawer({
    children
}) {

    return (
        <div className="drawer drawer-mobile max-h-fit h-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content max-h-fit">
                {children}
            </div>
            <div className="drawer-side min-h-screen h-auto z-40 shadow-lg text-sm">
                <label htmlFor="my-drawer-2" className="drawer-overlay max-h-fit bg-slate-900" ></label>
                <div>
                    <div className="h-fit-content">
                        <img src='/group-m.png' className="mt-6 mx-auto" />
                    </div>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <li className="">
                        </li>
                        {
                            links.map(
                                (value) => (
                                    <Fragment key={`${links.label}${links.src}`}>
                                        <li className="flex justify-between">
                                            <Link href={value.href}>
                                                <div>
                                                    <img src={value.src} className="h-4 w-4 mr-6 inline" />
                                                    <span> {value.label}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </Fragment>
                                )
                            )
                        }
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
}
