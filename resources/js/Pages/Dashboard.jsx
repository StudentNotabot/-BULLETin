import AddPost from "@/Components/Dashboard/AddPost";
import ShowPost from "@/Components/Dashboard/MyPost";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ auth, myBullet, flash }) {
    useEffect(() => {
        if (!myBullet) {
            Inertia.get("/bullet");
            return;
        }
    }, []);
    const [activeNavLink, setActiveNavLink] = useState("show");

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    Welcome to DASHBOARD --
                    <span className="font-bold text-xl">@{auth.user.name}</span>
                    --
                </div>
            }
        >
            <Head title="Dashboard" />

            <div>
                <div>
                    {activeNavLink !== "add" && (
                        <>
                            <button
                                className="m-2 uppercase indicator-end btn btn-active outline"
                                onClick={() => setActiveNavLink("add")}
                            >
                                ADD Post
                            </button>
                            <div className="text-center text-bold text-xl bg-gray-800 ">
                                MY POST
                            </div>
                        </>
                    )}
                    {activeNavLink !== "show" && (
                        <button
                            className="m-2 uppercase btn btn-active outline"
                            onClick={() => setActiveNavLink("show")}
                        >
                            my Post
                        </button>
                    )}
                </div>
                <div>
                    {activeNavLink === "add" && <AddPost />}
                    {activeNavLink === "show" && (
                        <ShowPost myBullet={myBullet} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
