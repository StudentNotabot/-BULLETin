import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function EditBullet(props) {
    const { myBullet } = props;
    const [title, setTitle] = useState(myBullet.title || "");
    const [post, setPost] = useState(myBullet.post || "");
    const [team, setTeam] = useState(myBullet.team || "");

    const handleEdit = () => {
        if (!title || !post || !team) {
            alert("Fill in all fields.");
            return;
        }
        const data = {
            id: myBullet.id,
            title,
            post,
            team,
        };
        Inertia.post("/bullet/update", data);
        setTitle("");
        setPost("");
        setTeam("");
    };

    return (
        <div className="min-h-screen bg-gray-500">
            <Head title="Edit" />
            <Navbar user={props.auth.user} />
            <div className="container mx-auto card w-full is-centered lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Title (required)"
                        className="m-2 input input-secondary w-full"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <textarea
                        type="text"
                        placeholder="... (required)"
                        className="m-2 w-full textarea textarea-secondary"
                        onChange={(e) => setPost(e.target.value)}
                        value={post}
                        maxLength={255}
                    />
                    <select
                        className="m-2 uppercase select select-secondary w-full"
                        onChange={(e) => setTeam(e.target.value)}
                        value={team}
                    >
                        <option selected>Anonymous</option>
                        <option>General Affair Dept.</option>
                        <option>Human Resource Dept.</option>
                        <option>IT Dept.</option>
                        <option>Marketing & Sales Dept.</option>
                        <option>Customer Services</option>
                        <option>Development Dept.</option>
                    </select>
                    <button
                        className="btn btn-secondary w-full"
                        onClick={handleEdit}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
