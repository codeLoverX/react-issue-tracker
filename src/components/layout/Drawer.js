import Link from "next/link";
const links= []
export default function Drawer({
    children
}) {

    return (
        <div className="drawer drawer-mobile max-h-fit h-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content max-h-fit">
                {children}
            </div>
            <div className="drawer-side min-h-screen h-auto z-500 shadow-lg">
                <label htmlFor="my-drawer-2" className="drawer-overlay max-h-fit bg-slate-900" ></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {
                        links.map(
                            (value) => (
                                <>
                                    <li>
                                        <Link href={value.href}>{value.label}</Link>
                                    </li>
                                </>
                            )
                        )
                    }
                    <li>
                    </li>
                </ul>

            </div>
        </div>


    );
}
