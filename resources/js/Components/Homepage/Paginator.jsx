import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const one = meta.links[1].url;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="">
            <div className="join">
                {prev && (
                    <>
                        <Link href={one} className="join-item btn">
                            latest
                        </Link>
                        <Link href={prev} className="join-item btn">
                            «
                        </Link>
                    </>
                )}
                <button className="join-item btn">{current}</button>
                {next && (
                    <Link href={next} className="join-item btn">
                        »
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Paginator;
