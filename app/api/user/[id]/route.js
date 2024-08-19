export function GET(request, context) {
  const { params } = context;
  return Response.json({ message: "ok your messages sended", params });
}
