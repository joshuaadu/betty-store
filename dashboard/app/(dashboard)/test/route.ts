import { cookies, headers } from "next/headers";

export async function GET(request: Request) {
	const headersList = headers();

	const cookieStore = cookies();
	const token = cookieStore.get("token");
	return new Response("Hello, Next.js!", {
		status: 200,
		headers: { "Set-Cookie": `token=${"token"}` },
	});
}

export async function POST(request: Request) {
	return new Response(request.body, {
		status: 200,
		headers: { "Set-Cookie": `token=${"token"}` },
	});
}
