import { useForm } from "@pankod/refine-react-hook-form";

import { LoadingIcon } from "icons";

export const AdminEdit: React.FC = () => {
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div className="container mx-auto">
            <br />
            <form onSubmit={handleSubmit(onFinish)}>
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                    >
                        Title
                    </label>
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        id="title"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Title"
                    />
                    {errors.title && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="ao"
                        className="mb-2 block text-sm font-medium"
                    >
                        Authors
                    </label>
                    <input
                        {...register("authors", { required: true })}
                        type="text"
                        id="authors"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Authors"
                    />
                    {errors.authors && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="journalName"
                        className="mb-2 block text-sm font-medium"
                    >
                        Journal Name
                    </label>
                    <input
                        {...register("journalName", { required: true })}
                        type="text"
                        id="journalName"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Journal Name"
                    />
                    {errors.journalName && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="publicationYear"
                        className="mb-2 block text-sm font-medium"
                    >
                        Publication Year
                    </label>
                    <input
                        {...register("publicationYear", { required: true })}
                        type="text"
                        id="publicationYear"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Publication Year"
                    />
                    {errors.publicationYear && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="volume"
                        className="mb-2 block text-sm font-medium"
                    >
                        Volume
                    </label>
                    <input
                        {...register("volume", { required: true })}
                        type="text"
                        id="volume"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Volume"
                    />
                    {errors.volume && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="pages"
                        className="mb-2 block text-sm font-medium"
                    >
                        Pages
                    </label>
                    <input
                        {...register("pages", { required: true })}
                        type="text"
                        id="pages"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Pages"
                    />
                    {errors.pages && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="doi"
                        className="mb-2 block text-sm font-medium"
                    >
                        DOI
                    </label>
                    <input
                        {...register("doi", { required: true })}
                        type="text"
                        id="doi"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="DOI"
                    />
                    {errors.doi && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="status"
                        className="mb-2 block text-sm font-medium"
                    >
                        Status
                    </label>
                    <select
                        {...register("status")}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    >
                        <option value="Awaiting Moderation">Awaiting Moderation</option>
                        <option value="Awaiting Analysis">Awaiting Analysis</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="practice"
                        className="mb-2 block text-sm font-medium"
                    >
                        Software Engineering Practice
                    </label>
                    <input
                        {...register("practice", { required: true })}
                        type="text"
                        id="practice"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                        placeholder="Software Engineering Practice"
                    />
                    {errors.practice && (
                        <p className="mt-1 text-sm text-red-600">
                            <span className="font-medium">Oops!</span> This
                            field is required
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="rating"
                        className="mb-2 block text-sm font-medium"
                    >
                        Rating 0-5
                    </label>
                    <select
                        {...register("rating")}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="flex w-full items-center rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-600 sm:w-auto"
                >
                    {formLoading && LoadingIcon}
                    <span>Save</span>
                </button>
            </form>
        </div>
    );
};