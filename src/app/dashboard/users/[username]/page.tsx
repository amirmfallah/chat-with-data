export default function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  return <p className="bg-white">Dashboard User {username}</p>;
}
