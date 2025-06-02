import ForumHeader from "@/components/ForumHeader";
import ThreadList from "@/components/ThreadList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <ForumHeader />
      <main>
        <ThreadList />
      </main>
    </div>
  );
};

export default Index;
