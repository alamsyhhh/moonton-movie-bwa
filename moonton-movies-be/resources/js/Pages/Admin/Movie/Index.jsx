import Authenticated from '@/Layouts/Authenticated';
import { Link, Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import FlashMessage from '@/Components/FlashMessage';

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <>
            <Authenticated auth={auth}>
                <Head title="List of Movie" />
                <Link href={route('admin.dashboard.movie.create')}>
                    <PrimaryButton type="button" className="mb-4 w-40">
                        Insert New Movie
                    </PrimaryButton>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                <table className="w-full table-fixed text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <img
                                        src={`/storage/${movie.thumbnail}`}
                                        className="w-32 rounded-md"
                                    />
                                </td>
                                <td>{movie.name}</td>
                                <td>{movie.category}</td>
                                <td>{movie.rating.toFixed(1)}</td>
                                <td>
                                    <Link
                                        href={route(
                                            'admin.dashboard.movie.edit',
                                            movie.id,
                                        )}
                                    >
                                        <PrimaryButton
                                            type="button"
                                            variant="warning"
                                        >
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                </td>
                                <td>
                                    <div
                                        onClick={() => {
                                            movie.deleted_at
                                                ? put(
                                                      route(
                                                          'admin.dashboard.movie.restore',
                                                          movie.id,
                                                      ),
                                                  )
                                                : destroy(
                                                      route(
                                                          'admin.dashboard.movie.destroy',
                                                          movie.id,
                                                      ),
                                                  );
                                        }}
                                    >
                                        <PrimaryButton
                                            type="button"
                                            variant="danger"
                                        >
                                            {movie.deleted_at
                                                ? 'Restore'
                                                : 'Delete'}
                                        </PrimaryButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    );
}
