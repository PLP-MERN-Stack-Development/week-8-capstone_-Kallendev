import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  Phone, 
  Video, 
  MoreVertical,
  Search,
  Paperclip,
  Smile,
  Circle
} from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "John Mwangi",
      specialty: "Plumber",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastMessage: "I can start work tomorrow at 9 AM",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      jobTitle: "Kitchen Sink Repair"
    },
    {
      id: 2,
      name: "Mary Akinyi",
      specialty: "Electrician",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Let me check my schedule and get back to you",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
      jobTitle: "Electrical Installation"
    },
    {
      id: 3,
      name: "Peter Kiprop",
      specialty: "Carpenter",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      lastMessage: "The materials list looks good to me",
      timestamp: "3 hours ago",
      unread: 0,
      online: true,
      jobTitle: "Custom Furniture"
    },
    {
      id: 4,
      name: "Grace Wanjiku",
      specialty: "Painter",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastMessage: "I've sent you the color samples",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      jobTitle: "House Painting"
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "John Mwangi",
      content: "Hi! I saw your plumbing job posting. I have 10 years of experience with kitchen sink repairs.",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      senderId: 'me',
      senderName: "You",
      content: "Great! Can you tell me more about your approach to this type of repair?",
      timestamp: "10:35 AM",
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: "John Mwangi",
      content: "I'll need to inspect the pipes first, but typically it's either a loose connection or worn gaskets. I bring all necessary tools and parts.",
      timestamp: "10:40 AM",
      isOwn: false
    },
    {
      id: 4,
      senderId: 'me',
      senderName: "You",
      content: "That sounds perfect. What's your availability this week?",
      timestamp: "10:42 AM",
      isOwn: true
    },
    {
      id: 5,
      senderId: 1,
      senderName: "John Mwangi",
      content: "I can start work tomorrow at 9 AM. The job should take about 2-3 hours depending on what we find.",
      timestamp: "10:45 AM",
      isOwn: false
    }
  ];

  const currentChat = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend/socket
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Messages</h1>
          <p className="text-xl text-muted-foreground">
            Chat with fundis about your projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="bg-card border-border lg:col-span-1">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 bg-input border-border"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`p-4 cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedChat === conv.id ? 'bg-muted' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <img
                          src={conv.avatar}
                          alt={conv.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {conv.online && (
                          <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">
                            {conv.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {conv.timestamp}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {conv.specialty} • {conv.jobTitle}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">
                            {conv.lastMessage}
                          </p>
                          {conv.unread > 0 && (
                            <Badge variant="default" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="bg-card border-border lg:col-span-2 flex flex-col">
            {currentChat ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={currentChat.avatar}
                          alt={currentChat.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {currentChat.online && (
                          <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-green-500 text-green-500" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{currentChat.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {currentChat.specialty} • {currentChat.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      Job: {currentChat.jobTitle}
                    </Badge>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="bg-input border-border pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2"
                      >
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} variant="default">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">No conversation selected</h3>
                  <p className="text-muted-foreground">
                    Choose a conversation to start messaging
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;