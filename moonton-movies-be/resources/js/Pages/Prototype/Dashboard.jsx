import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovieCard';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Flickity from 'react-flickity-component';

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: 'left',
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: '>1',
    };
    return (
        <>
            <Head title="Dashboard" />
            <Authenticated>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Head>
                <div>
                    <div className="mb-4 text-[22px] font-semibold text-black">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1, 2, 3, 4].map((i) => (
                            <FeaturedMovie
                                key={i}
                                slug="the-batman-in-love"
                                name={`The Batman in Love ${i}`}
                                category="Comedy"
                                thumbnail="https://picsum.photos/200/300"
                                rating={i + 1}
                            />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="mb-4 text-[22px] font-semibold text-black">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {/* Movies 1 */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                slug="the-batman-in-love"
                                name={`The Batman in Love ${i}`}
                                category="Comedy"
                                thumbnail="https://picsum.photos/200/300"
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
