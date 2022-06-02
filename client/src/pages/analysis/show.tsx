import { useShow } from "@pankod/refine-core";

import { IArticle } from "interfaces";

export const AnalysisShow: React.FC = () => {
    const { queryResult } = useShow<IArticle>();
    const { data } = queryResult;
    const record = data?.data;

    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="col">

                </div>
                <div className="col">

                </div>
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Title</label>
                <input
                    value={record?.title}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Authors</label>
                <input
                    value={record?.authors}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Journal Name</label>
                <input
                    value={record?.journalName}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Volume</label>
                <input
                    value={record?.volume}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Pages</label>
                <input
                    value={record?.pages}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">DOI</label>
                <input
                    value={record?.doi}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Practice</label>
                <input
                    value={record?.practice}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Status</label>
                <input
                    value={record?.status.toString()}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">Rating</label>
                <input
                    value={record?.rating}
                    disabled
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                />
            </div>
        </div>
    );
};
