export default function InputError({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <div className="my-4 rounded-md border-2 border-red-600 px-4 py-2">
                <div className="font-medium text-red-600">
                    Whoops! Something went wrong.
                </div>

                <ul className="mt-3 list-inside list-disc text-sm text-red-600">
                    {Object.keys(errors).map(function (key, index) {
                        return <li key={index}>{errors[key]}</li>;
                    })}
                </ul>
            </div>
        )
    );
}
