import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [team, setTeam] = useState("ANONYMOUS");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            post,
            team,
        };
        if (
            data.title.trim() !== "" &&
            data.post.trim() !== "" &&
            data.team.trim() !== ""
        ) {
            Inertia.post("/bullet", data);
            setIsNotif(true);
            setTitle("");
            setPost("");
            setTeam("");
        }
    };

    return (
        <>
            <div className="text-center text-bold text-xl bg-gray-800 ">
                ADD POST
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
                {isNotif && (
                    <div role="alert" className="alert">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-current shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>POSTED!</span>
                    </div>
                )}
                <div className="card w-full text-center bg-base-100 shadow-xl">
                    <input
                        required
                        type="text"
                        placeholder="Title (required, max. 35)"
                        className="m-2 lg:w-96 input input-secondary"
                        onChange={(title) => setTitle(title.target.value)}
                        value={title}
                        maxLength={35}
                    />
                    <textarea
                        required
                        type="text"
                        placeholder="... (required, max. 255)"
                        className="m-2 textarea textarea-secondary"
                        onChange={(post) => setPost(post.target.value)}
                        value={post}
                        maxLength={255}
                    />
                    <select
                        className="m-2 uppercase select select-secondary"
                        onChange={(team) => setTeam(team.target.value)}
                        value={team}
                    >
                        <option selected>Anonymous</option>
                        <option>General Affair </option>
                        <option>Human Resource Departement</option>
                        <option>IT Department</option>
                        <option>Marketing & Sales Departement</option>
                        <option>Customer Services</option>
                        <option>
                            Strategy & Business Development Department
                        </option>
                    </select>
                </div>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        handleSubmit();
                    }}
                >
                    POST
                </button>
            </div>
        </>
    );
}
