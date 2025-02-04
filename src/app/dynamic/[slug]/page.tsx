import { headers } from "next/headers";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const headersData = await headers();
    console.log('headers', headersData);
    console.log('params', await params);
    return (
        <div>
            <h1>slug page</h1>
        </div>
    );
}