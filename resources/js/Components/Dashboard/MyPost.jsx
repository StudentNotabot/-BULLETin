import { Link } from "@inertiajs/react";

export default function ShowPost({ myBullet }) {
    return (
        <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
            {myBullet && myBullet.length > 0 ? (
                myBullet.map((bullet, i) => {
                    return (
                        <div
                            key={i}
                            className="card w-full lg:w-96 outline shadow-xl"
                        >
                            <div className="card-body">
                                <div className="badge italic">
                                    {bullet.team}
                                </div>
                                <h2 className="card-title bg-gray-700 text-black text-xl rounded-box uppercase p-2 font-bold">
                                    {bullet.title}
                                </h2>
                                <p>" {bullet.post} "</p>
                                <div className="card-actions justify-end text-gray-400">
                                    <div className="badge badge-outline">
                                        <Link
                                            href={route("edit.bullet")}
                                            method="get"
                                            data={{ id: bullet.id }}
                                            as="button"
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="badge badge-outline">
                                        <Link
                                            href={route("delete.bullet")}
                                            method="post"
                                            data={{ id: bullet.id }}
                                            as="button"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="text-warning">Post not found. Add new Post.</p>
            )}
        </div>
    );
}
