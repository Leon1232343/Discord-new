import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const DirectMessagesPage = () => {
  const { userId } = useParams();

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-zinc-800 p-4">
        <h2 className="text-xl font-semibold">Direct Message with User {userId}</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-700" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold">User {userId}</span>
                  <span className="text-xs text-zinc-400">Today at 1:23 PM</span>
                </div>
                <p className="mt-1">Hey, how are you?</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-600" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold">You</span>
                  <span className="text-xs text-zinc-400">Today at 1:24 PM</span>
                </div>
                <p className="mt-1">I'm doing well, thanks for asking! How about you?</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="border-t border-zinc-800 p-4">
        <div className="rounded-md bg-zinc-800 p-2">
          <input
            type="text"
            placeholder={`Message @User${userId}`}
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DirectMessagesPage;
