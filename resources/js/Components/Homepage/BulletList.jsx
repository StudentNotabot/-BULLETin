const isBullet = (bullet) => {
    return bullet.map((data, i) => {
        const last_update = new Date(data.updated_at).toLocaleDateString(
            "en-GB"
        );
        return (
            <div
                key={i}
                className="card w-full lg:w-96 outline text-accent shadow-xl"
            >
                <div className="card-body">
                    <div className="text-primary ">@{data.author}</div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline text-gray-400">
                            {data.team}
                        </div>
                        <div className="badge badge-inline text-gray-600">
                            {last_update}
                        </div>
                    </div>
                    <details className="collapse">
                        <summary className="collapse-title bg-secondary text-black text-xl uppercase font-bold">
                            {data.title}
                        </summary>
                        <div className="collapse-content bg-base-300 p-3">
                            <p>" {data.post} "</p>
                        </div>
                    </details>
                </div>
            </div>
        );
    });
};

const noBullet = () => {
    return <p className="text-warning">Post not found.</p>;
};

const BulletList = ({ bullet }) => {
    return bullet.length === 0 ? noBullet() : isBullet(bullet);
};

export default BulletList;
