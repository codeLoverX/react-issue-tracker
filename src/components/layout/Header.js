

const Avatar = () => {
    return (
        <>
            <div className="avatar relative">
                <div className="w-12 rounded-full mr-6">
                    <img src="/me.jpg" />
                </div>
                <div className="w-[30px] h-[20px] bg-red-400 absolute -top-2 right-0 text-sm text-center text-white">42</div>
            </div>
        </>)
}

export default function Header() {

    return (
        <div className='border-gray navbar border-b bg-slate-50 shadow-lg py-4'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <label tabIndex={0} className='btn-ghost btn lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className='dropdown-content menu rounded-box mt-3 w-[95vw] bg-base-100 p-2 text-center text-base shadow'
                    >
                        <Avatar />
                    </ul>
                </div>
            </div>
            <div className='navbar-end hidden lg:flex'>
                <ul className='menu menu-horizontal px-1 text-lg font-semibold'>
                    <Avatar />
                </ul>
            </div>
        </div>
    );
}
