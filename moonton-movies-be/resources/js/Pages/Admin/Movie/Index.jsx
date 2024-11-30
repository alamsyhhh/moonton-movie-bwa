import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import FlashMessage from '@/Components/FlashMessage';

export default function Index({ auth, flashMessage }) {
    return (
        <>
            <Authenticated auth={auth}>
                <Link href={route('admin.dashboard.movie.create')}>
                    <PrimaryButton type="button" className="mb-4 w-40">
                        Insert New Movie
                    </PrimaryButton>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
            </Authenticated>
        </>
    );
}
