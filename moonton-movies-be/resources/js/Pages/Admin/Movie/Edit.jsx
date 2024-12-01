import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import { Inertia } from '@inertiajs/inertia';

export default function Edit({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const handleInputChange = (field, value) => {
        console.log(`Field: ${field}, Value: ${value}`);
        setData(field, value);
    };

    // const submit = (e) => {
    //     console.log(setData);
    //     e.preventDefault();

    //     post(route('admin.dashboard.movie.store'));
    // };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        console.log('Submitted Data:', data);
        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: 'PUT',
            ...data,
        });
    };

    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Insert a New Movie" />

                <h1 className="text-xl">Update Movie: {movie.name}</h1>
                <hr className="mb-4" />
                <InputError errors={errors} />
                <form onSubmit={submit}>
                    <InputLabel forInput="name" value="Name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        variant="primary-outline"
                        defaultValue={movie.name}
                        onChange={(e) =>
                            handleInputChange('name', e.target.value)
                        }
                        placeholder="Enter the name of the movie"
                        isError={errors.name}
                    />
                    <InputLabel
                        forInput="category"
                        value="Category"
                        className="mt-4"
                    />
                    <TextInput
                        id="category"
                        type="text"
                        name="category"
                        variant="primary-outline"
                        defaultValue={movie.category}
                        onChange={(e) =>
                            handleInputChange('category', e.target.value)
                        }
                        placeholder="Enter the category of the movie"
                        isError={errors.category}
                    />
                    <InputLabel
                        forInput="video_url"
                        value="Video URL"
                        className="mt-4"
                    />
                    <TextInput
                        id="video_url"
                        type="url"
                        name="video_url"
                        variant="primary-outline"
                        defaultValue={movie.video_url}
                        onChange={(e) =>
                            handleInputChange('video_url', e.target.value)
                        }
                        placeholder="Enter the video url of the movie"
                        isError={errors.video_url}
                    />
                    <InputLabel
                        forInput="thumbnail"
                        value="Thumbnail"
                        className="mt-4"
                    />
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        className="mb-5 w-40"
                        alt={movie.name}
                    />
                    <TextInput
                        id="thumbnail"
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        onChange={(e) =>
                            setData('thumbnail', e.target.files[0])
                        }
                        placeholder="Insert thumbnail of the movie"
                        isError={errors.thumbnail}
                    />
                    <InputLabel
                        forInput="rating"
                        value="Rating"
                        className="mt-4"
                    />
                    <TextInput
                        id="rating"
                        type="number"
                        name="rating"
                        variant="primary-outline"
                        defaultValue={movie.rating}
                        onChange={(e) =>
                            handleInputChange('rating', e.target.value)
                        }
                        placeholder="Enter the rating of the movie"
                        isError={errors.rating}
                    />
                    <div className="mt-4 flex flex-row items-center">
                        <InputLabel
                            forInput="is_featured"
                            value="Is Featured"
                            className="mr-3 mt-1"
                        />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) =>
                                handleInputChange(
                                    'is_featured',
                                    e.target.checked,
                                )
                            }
                            className="ml-2"
                            checked={movie.is_featured}
                        />
                    </div>
                    <PrimaryButton
                        type="submit"
                        className="mt-4 w-[300px]"
                        processing={processing}
                    >
                        Save
                    </PrimaryButton>
                </form>
            </Authenticated>
        </>
    );
}
