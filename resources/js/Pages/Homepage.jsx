import BulletList from "@/Components/Homepage/BulletList";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/* <label className="w-full justify-center mg:w-96 swap swap text-sm">
                <input type="checkbox" />
                <div className="swap-off">
                    <kbd className="kbd">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </kbd>
                </div>
                <div className="swap-on">
                    <kbd className="kbd text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="green"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        &#91;BULLETin Board&#93;&nbsp;&#x1F5B1;&nbsp;
                        <span className="italic rounded bg-gray-400 text-black">
                            Title
                        </span>
                        &nbsp;&rarr; show&nbsp;
                        <span className="italic rounded bg-base-100">
                            "post"
                        </span>
                        &nbsp;
                    </kbd>
                </div>
            </label> */}

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <BulletList bullet={props.bullet.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.bullet.meta} />
            </div>
        </div>
    );
}
