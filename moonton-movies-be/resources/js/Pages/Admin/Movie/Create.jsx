import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
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

        // if (!data.name || !data.category || !data.video_url || !data.rating) {
        //     console.error('Please fill out all fields');
        //     return;
        // }

        console.log('Submitted Data:', data);
        post(route('admin.dashboard.movie.store'));
    };

    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Insert a New Movie" />

                <h1 className="text-xl">Insert a New Movie</h1>
                <hr className="mb-4" />
                <InputError errors={errors} />
                <form onSubmit={submit}>
                    <InputLabel forInput="name" value="Name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        variant="primary-outline"
                        onChange={(e) =>
                            handleInputChange('name', e.target.value)
                        }
                        placeholder="Enter the name of the movie"
                        isError={errors.name}
                        required
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
                        onChange={(e) =>
                            handleInputChange('category', e.target.value)
                        }
                        placeholder="Enter the category of the movie"
                        isError={errors.category}
                        required
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
                        onChange={(e) =>
                            handleInputChange('video_url', e.target.value)
                        }
                        placeholder="Enter the video url of the movie"
                        isError={errors.video_url}
                        required
                    />
                    <InputLabel
                        forInput="thumbnail"
                        value="Thumbnail"
                        className="mt-4"
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
                        required
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
                        onChange={(e) =>
                            handleInputChange('rating', e.target.value)
                        }
                        placeholder="Enter the rating of the movie"
                        isError={errors.rating}
                        required
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
