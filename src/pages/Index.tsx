import { Post } from "@/components/Post";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  const posts = [
    {
      username: "johndoe",
      content: "Just launched my new project! Super excited to share it with everyone. #coding #webdev",
      timestamp: "2h ago",
      likes: 42,
      comments: 7,
    },
    {
      username: "techie_sarah",
      content: "Beautiful day for some outdoor coding ☀️ #remotework",
      timestamp: "4h ago",
      likes: 28,
      comments: 3,
    },
    {
      username: "dev_mike",
      content: "Who else is learning React in 2024? Share your experience below! 👇 #reactjs #javascript",
      timestamp: "6h ago",
      likes: 156,
      comments: 24,
    },
  ];

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-center">Home</h1>
      </header>
      <main className="max-w-lg mx-auto">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;