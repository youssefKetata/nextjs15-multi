import { headers } from "next/headers";

export default async function HomePage() {
    const headersData = await headers();
    console.log('headers', headersData);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );

}