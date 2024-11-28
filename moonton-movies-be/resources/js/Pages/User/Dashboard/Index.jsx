import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovieCard';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Flickity from 'react-flickity-component';

export default function Dashboard({auth, featuredMovies, movies}) {
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
            <Authenticated auth={auth}>
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
                        {featuredMovies.length > 0 ? (
                            featuredMovies.map((featuredMovie) => (
                                <FeaturedMovie
                                    key={featuredMovie.id}
                                    slug={featuredMovie.slug}
                                    name={featuredMovie.name}
                                    category={featuredMovie.category}
                                    thumbnail={featuredMovie.thumbnail}
                                    rating={featuredMovie.rating}
                                />
                            ))
                        ) : (
                            <div className="text-gray-500">No featured movies available.</div>
                        )}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="mb-4 text-[22px] font-semibold text-black">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                slug={movie.slug}
                                name={movie.name}
                                category={movie.category}
                                thumbnail={movie.thumbnail}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}
