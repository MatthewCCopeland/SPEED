import { useForm } from "@pankod/refine-react-hook-form";

import { LoadingIcon } from "icons";

export const ArticleCreate: React.FC = () => {
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
