import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChannelPage = () => {
  const { serverId, channelId } = useParams();

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-zinc-800 p-4">
        <h2 className="text-xl font-semibold">#{channelId}</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold">User1</span>
                  <span className="text-xs text-zinc-400">Today at 12:34 PM</span>
                </div>
                <p className="mt-1">Hello, this is a message in channel {channelId} of server {serverId}!</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-700"></div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold">User2</span>
                  <span className="text-xs text-zinc-400">Today at 12:36 PM</span>
                </div>
                <p className="mt-1">This is a response to the message above.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="border-t border-zinc-800 p-4">
        <div className="rounded-md bg-zinc-800 p-2">
          <input
            type="text"
            placeholder={`Message #${channelId}`}
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
